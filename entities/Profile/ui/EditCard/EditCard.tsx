import cls from './EditCard.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Modal} from "shared/ui/Modal/Modal.tsx";
import {Input} from "shared/ui/Input/Input.tsx";
import {MyText, TextAlign} from "shared/ui/MyText/MyText.tsx";
import {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useSetProfileInfoMutation} from "entities/Profile/api/profileApi.ts";
import {LoadingPage} from "pages/LoadingPage";
import {useSelector} from "react-redux";
import {getProfileName, getProfilePhoto} from "entities/Profile/model/selectors/getProfileSelectors.ts";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {useNavigate} from "react-router-dom";

interface EditCardProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
}

export const EditCard = ({className, isOpen, onClose}: EditCardProps) => {
    const name = useSelector(getProfileName);
    const photo = useSelector(getProfilePhoto);
    const [nameLocal, setName] = useState<string>(name);
    const [photoLocal, setPhoto] = useState<string|null>(null);
    const navigate= useNavigate();
    const [setProfile, {isLoading}]= useSetProfileInfoMutation()

    const handleName = useCallback((name: string)=>{
        setName(name);
        console.log(name)
    },[])

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const result = reader.result as string;
                setPhoto(result); // Сохраняем base64
            };

            reader.onerror = () => {
                console.error('Ошибка чтения файла');
            };

            reader.readAsDataURL(file);
        }
    }, []);

    const onHandleClick = useCallback( async ()=>{
        try{
            const response = await setProfile({name: nameLocal, photo: photoLocal})
            if(response){
                window.location.reload();
            }
        }catch(err){
            console.log(err)
        }
    },[nameLocal, photoLocal, setProfile])

    if(isLoading){
        return <LoadingPage/>
    }

    return (
        <Modal isOpen={isOpen}
               onClose={onClose}

               className={classNames('', {}, [className])}
        >
            <div className={cls.EditCard}>
                <MyText title={'Редактирование профиля'}/>
                <div className={cls.flex}>
                    <input type={'file'}
                           placeholder={'Выберите фото'}
                           accept="image/*"
                           onChange={handleFileChange} />
                    <div>
                        <Input placeholder={'Ваше имя'}
                               value={name}
                               onChange={handleName}/>
                    </div>
                </div>
                <Button theme={ButtonTheme.PRIMARY} className={cls.btn} onClick={onHandleClick}>
                  <MyText text ={'Отправить'} align={TextAlign.CENTER}/>
                </Button>
            </div>

        </Modal>
    )
}