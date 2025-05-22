import cls from './BunItems.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {Card} from "shared/ui/Card/Card.tsx";
import {GoodsItem} from "features/Cart";
import {Link, useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";
import {useGetBunsMutation} from "features/Buns/api/BunsApi.tsx";
import {LoadingPage} from "pages/LoadingPage";
import {useEffect, useState} from "react";
import {Loader} from "shared/ui/Loader/Loader.tsx";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";


interface BunItemsProps {
    className?: string;
    addItemToCart:(item: GoodsItem) => void;
    category:string;
}

// const items:GoodsItem[] = [
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

export const BunItems = ({className, addItemToCart, category}: BunItemsProps) => {
    const [getBuns, {isLoading, data, isError}] = useGetBunsMutation();
    const navigate = useNavigate();
    const [items, setItems] = useState<GoodsItem[]>([]);
    console.log(isError)

    useEffect(()=>{
        getBuns(category);
    },[category, getBuns])

    console.log(data?.menu)

    useEffect(() => {
        if(data){
            setItems(data.menu)
        }
    }, [data, isError, navigate]);

    if(isLoading){
        return <LoadingPage/>
    }

    return (
        <div className={classNames(cls.BunItems, {}, [className])}>
            {isLoading && <Loader/>}
            {items.length < 0 && <MyText text={'Товары не найдены :('} align={TextAlign.CENTER} size={TextSize.USERNAME}/>}
            {items && items.map(item=>(
                <Link to = {`${RoutePath.goods_details}${item.id}`} key={item.id}>
                    <Card
                        title={item.name}
                        description={item?.description ?? ''}
                        key={item.id}
                        img={item.photo}
                        addItemToCart={()=>addItemToCart(item)}/>
                </Link>
            ))}
        </div>
    )
}