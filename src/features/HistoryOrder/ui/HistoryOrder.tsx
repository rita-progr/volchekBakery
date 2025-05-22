import cls from './HistoryOrder.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {HistoryItem} from "features/HistoryOrder/ui/HistoryItem/HistoryItem.tsx";
import {useGetOrdersQuery} from "features/HistoryOrder/api/HistoryOrderApi.tsx";
import {LoadingPage} from "pages/LoadingPage";
import {useEffect, useState} from "react";
import {HistoryOrderSchema, Orders} from "../model/types/HistoryOrderSchema.tsx";
import {MyText} from "shared/ui/MyText/MyText.tsx";

interface HistoryOrderProps {
    className?: string;
}



// const items: HistoryOrderSchema[] = [
//     {
//         id:'dsmk',
//         price: '500',
//         createdAt: '2025-05-19T18:19:26.067Z',
//         orderInfo: [
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//         ]
//     },
//     {
//         id:'dsmk',
//         price: '500',
//         createdAt: '2025-05-19T18:19:26.067Z',
//         orderInfo: [
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//         ]
//     },
//     {
//         id:'dsmk',
//         price: '500',
//         createdAt: '2025-05-19T18:19:26.067Z',
//         orderInfo: [
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//             {
//                 quantity: '5',
//                 name: 'Булочка'
//             },
//         ]
//     },
//
// ]

export const HistoryOrder = ({className}: HistoryOrderProps) => {

    const {isLoading, data} = useGetOrdersQuery();
    const [items, setItems] = useState<Orders[]>()

    useEffect(() => {
        if(data){
            setItems(data.orders);
        }
    }, [data]);


    if(isLoading){
        return <LoadingPage/>
    }

    return (
        <div className={classNames(cls.HistoryOrder, {}, [className])}>
            {items && items.length > 0 ? items.map(item=>(
                <HistoryItem date={item.createdAt} ordersInfo={item.orderInfo} price={item.price} key={item.id}/>
            )) : <MyText text = {'Заказы не найдены'}/>}
        </div>
    )
}