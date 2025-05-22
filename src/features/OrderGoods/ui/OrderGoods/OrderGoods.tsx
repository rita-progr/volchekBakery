import cls from './OrderGoods.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {Input} from "shared/ui/Input/Input.tsx";
import {OrderGoodsCards} from "features/OrderGoods/ui/OrderGoodsCards/OrderGoodsCards.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Modal} from "shared/ui/Modal/Modal.tsx";
import {useCallback, useState} from "react";
import {useAddProductMutation, useGetOrdersForAdminQuery} from "features/OrderGoods/api/OrderGoodsApi.tsx";
import {LoadingPage} from "pages/LoadingPage";


interface OrderGoodsProps {
    className?: string;
}

export const OrderGoods = ({className}: OrderGoodsProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [addProduct, {isLoading}] = useAddProductMutation();
    const {data} = useGetOrdersForAdminQuery()
    const [name, setName] = useState<string>("");
    const [photo, setPhoto] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [composition, setComposition] = useState<string>("");
    const [carbohydrates, setCarbohydrates] = useState<string>("");
    const [proteins, setProteins] = useState<string>("");
    const [fats, setFats] = useState<string>("");
    const [calories, setCalories] = useState<string>("");



    const onClose = useCallback(() => {
       setIsOpen(false);
    },[])

    const onOpen = useCallback(() => {
        setIsOpen(true);
    },[])

    const handleChangeName = useCallback((value: string) => {
        setName(value);
    },[])

    const handleChangePrice = useCallback((value: string) => {
        setPrice(value);
    },[])

    const handleChangeDescription = useCallback((value: string) => {
        setDescription(value);
    },[])

    const handleChangeComposition = useCallback((value: string) => {
        setComposition(value);
    },[])

    const handleChangeCarbohydrates = useCallback((value: string) => {
        setCarbohydrates(value);
    },[])

    const handleChangeProteins = useCallback((value: string) => {
        setProteins(value);
    },[])

    const handleChangeCalories = useCallback((value: string) => {
        setCalories(value);
    },[])

    const handleChangeFats = useCallback((value: string) => {
        setFats(value);
    },[])

    const handleSubmit = async () => {
        try {
           const response =  await addProduct({
                name,
                photo,
                price,
                description,
                composition,
                carbohydrates,
                proteins,
                fats,
                calories,
            }).unwrap();
            if(response.success){
                onClose();
            }
        } catch (error) {
            console.error('Ошибка добавления товара:', error);
        }
    };

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

    if(!data){
        return <LoadingPage/>
    }

    console.log(data)


    return (
        <div className={classNames(cls.OrderGoods, {}, [className])}>
            <div className={cls.flex}>
                <Button theme={ButtonTheme.PRIMARY}
                        onClick={onOpen}
                        className={cls.btn}><MyText text={'Добавить товар'} size={TextSize.SMALL}/>
                </Button>
            </div>
            <OrderGoodsCards items={data?.products}/>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className={cls.card}>
                    <MyText text = {'Добавление товара'} size={TextSize.XMEDIUM} align={TextAlign.CENTER}/>
                    <div className={classNames(cls.flex,{},[cls.block])}>
                        <div className={cls.flexCol}>
                            <input accept="image/*" onChange={handleFileChange} type='file'
                                   placeholder={'Выберите файл'}/>
                            <Input placeholder={'Введите название товара'} value={name} onChange={handleChangeName}/>
                            <Input placeholder={'Введите описание товара'} value={description}
                                   onChange={handleChangeDescription}/>
                            <div className={cls.flex}>
                                <Input placeholder={'Ккал'} classNameInput={cls.inp} value={calories}
                                       onChange={handleChangeCalories}/>
                                <Input placeholder={'Б'} value={proteins} onChange={handleChangeProteins}/>
                                <Input placeholder={'Ж'} value={fats} onChange={handleChangeFats}/>
                                <Input placeholder={'У'} value={carbohydrates} onChange={handleChangeCarbohydrates}/>
                            </div>
                            <Input placeholder={'Состав товара'} value={composition}
                                   onChange={handleChangeComposition}/>
                            <Input placeholder={'Цена товара'} value={price} onChange={handleChangePrice}/>
                        </div>
                    </div>
                    <Button theme={ButtonTheme.PRIMARY}
                            onClick={handleSubmit}
                            className={cls.btnForm}><MyText text={'Добавить товар'} size={TextSize.SMALL}/>
                    </Button>

                </div>
            </Modal>
        </div>
    )
}