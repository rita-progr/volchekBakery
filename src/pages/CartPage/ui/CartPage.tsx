import cls from './CartPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {CartList, getGoods, getSum} from "../../../features/Cart";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useState} from "react";
import {PlaceAnOrder} from "../../../features/PlaceAnOrder";
import {SelectBakery} from "../../../entities/Bakery";
import {useFetchOrderMutation} from "pages/CartPage/api/OrderApi.tsx";
import {useSelector} from "react-redux";
import {StateSchema} from "../../../app/providers/StoreProvider";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {Loader} from "shared/ui/Loader/Loader.tsx";
import {LoadingPage} from "pages/LoadingPage";

interface CartPageProps {
    className?: string;
}

const CartPage = ({className}: CartPageProps) => {
    const [addOrder, {isLoading}] = useFetchOrderMutation();
    const price = useSelector(getSum).toString()
    const [open, setOpen] = useState(false);
    const bakeryId = useSelector((state: StateSchema) => state.auth?.bakeryId);
    const info = useSelector(getGoods);
    const navigate = useNavigate();

    const handleOrder = async () => {
        try{
            const response = await addOrder({bakeryId, info,  price}).unwrap();
            if(response.orderId) {
                localStorage.removeItem("cartProductIds")
                await setOpen(true);
                // window.location.reload();
                // navigate(RoutePath.goods)
            }

        }catch(err){
            console.log(err);
        }
    }
    if(isLoading){
        return <LoadingPage />;
    }

    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <MyText title={'Корзина'} size = {TextSize.LARGE} className={cls.title}/>
             <CartList className={cls.select}/>
            <MyText text={`Итого: ${price} р`} className={cls.text}/>
            <SelectBakery />
            <Button theme={ButtonTheme.PRIMARY} className={cls.btn} onClick={handleOrder} >
                <MyText text={'Оформить заказ'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
            </Button>
            <PlaceAnOrder isOpen={open} onClose={()=>setOpen(false)}/>
        </div>
    )
}
export default CartPage;