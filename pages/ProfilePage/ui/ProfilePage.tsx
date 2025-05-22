import cls from './ProfilePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ProfileCard} from "entities/Profile";
import {CardWithPin} from "shared/ui/CardWithPin/CardWithPin.tsx";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import Time from 'shared/assets/icons/time.svg?react';
import Cart from 'shared/assets/icons/card.svg?react'
import {Link} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {EditCard} from "entities/Profile/ui/EditCard/EditCard.tsx";
import {useState} from "react";
import {Button} from "shared/ui/Button/Button.tsx";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
    const [open,setOpen] = useState(false);
    return (
        <div className={cls.Profile}>
            <Button className={cls.text} onClick={() => setOpen(true)}>
                <MyText text={'Редактировать профиль'} size={TextSize.USERNAME}/>
            </Button>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard  className={cls.card}/>
                <div className={cls.card}>
                    <Link to={RoutePath.history_order}  className={cls.history} >
                        <CardWithPin className={cls.history}>
                            <MyText text={"История заказов"} size={TextSize.LARGE}/>
                            <Time/>
                        </CardWithPin>
                    </Link>
                    <Link to={RoutePath.cart}  className={cls.history} >
                        <CardWithPin className={cls.history}>
                            <MyText text={"В корзину"} size={TextSize.LARGE}/>
                            <Cart className = {cls.cart}/>
                        </CardWithPin>
                    </Link>
                </div>
            </div>

            <EditCard isOpen={open} onClose={()=>setOpen(false)}/>
        </div>
    )
}
export default ProfilePage;