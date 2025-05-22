import cls from './CartList.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {CartActions, GoodsItem} from "features/Cart";
import {MyText, TextAlign} from "shared/ui/MyText/MyText.tsx";
import {useEffect, useState} from "react";
import {useGetCartQuery} from "features/Cart/api/CartApi.tsx";
import {useSelector} from "react-redux";
import {StateSchema} from "../../../../app/providers/StoreProvider";
import {LoadingPage} from "pages/LoadingPage";
import {CartItem} from "features/Cart/ui/CartItem/CartItem.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {CartProductWithQuantity} from "features/Cart/model/types/CartSchema.ts";

interface CartListProps {
    className?: string;
}

// const items:GoodsItem[] = [
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         calories: 400,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
//     {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         protein: 30,
//         fats: 30,
//         carb: 100
//     },
// ]

export const CartList = ({className}: CartListProps) => {
    // const [items, setItems] = useState<GoodsItem[]>([]);
    const localId = localStorage.getItem("cartProductIds");
    const idProduct: string[] = localId ? JSON.parse(localId) : [];
    const dispatch = useAppDispatch()
    const {data, isLoading} = useGetCartQuery(idProduct);

    useEffect(() => {
        if (data?.resp) {
            const grouped = data.resp.reduce<Record<string, CartProductWithQuantity>>(
                (acc, item) => {
                    const key = item.name;

                    if (!acc[key]) {
                        acc[key] = {
                            name: item.name,
                            quantity: 1,
                        };
                    } else {
                        acc[key].quantity += 1;
                    }

                    return acc;
                },
                {}
            );

            const goodsWithQuantity = Object.values(grouped);
            dispatch(CartActions.setGoods(goodsWithQuantity));
            // @ts-ignore
            const totalSum = data.resp.reduce((acc, item) => {
                return acc + Number(item.price);
            }, 0);

            dispatch(CartActions.sum(totalSum));
        }
    }, [data, dispatch]);

    console.log(data)
    if(isLoading){
        return <LoadingPage/>
    }
    return (
        <div className={classNames(cls.CartList, {}, [className])}>
            {data && data?.resp &&  data?.resp.length > 0 ? null :  <MyText text = {'Товары еще не добавлены в корзину'} align={TextAlign.CENTER}/>}
            {data?.resp.map((item: GoodsItem) => (
                <CartItem item={item} key = {item.id} />
            ))}
        </div>
    )
}