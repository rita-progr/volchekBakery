import cls from './ProfileCard.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {CardWithPin} from "shared/ui/CardWithPin/CardWithPin.tsx";
import {useGetProfileInfoQuery} from "entities/Profile/api/profileApi.ts";
import {LoadingPage} from "pages/LoadingPage";
import {useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {profileActions} from "../../model/slices/ProfileSlices.ts";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {

    const {data, isLoading} = useGetProfileInfoQuery();
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if(data){
            dispatch(profileActions.setEmail(data.email));
            dispatch(profileActions.setName(data.name));
            dispatch(profileActions.setPhoto(data.photo));
        }
    },[data, dispatch])

    if(isLoading) {
        return <LoadingPage/>
    }

    return (
        <CardWithPin className={classNames(cls.ProfileCard, {}, [className])}>
            {data && data.photo? <img src={data.photo} className={cls.img} alt=""/> : <div className={cls.mockAvatar}/>}
            {data && data?.name &&  data?.name?.length > 0 ? <MyText text={data?.name}
                                                          size={TextSize.LARGE}
                                                          align={TextAlign.CENTER}/> : null}

        </CardWithPin>
    )
}