import cls from './ordersList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {OrderCard} from "../orderCard/orderCard.tsx";
import {IOrder} from "../../model/types/orderSchema.ts";
import {useGetAllOrdersQuery} from "features/OrderManagment/api/OrderManagmentApi.tsx";
import {getOrderFilter} from "../../model/selectrors/getOrdersSelectors.tsx";
import {useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {LoadingPage} from "pages/LoadingPage";

interface ordersListProps {
    className?: string;
}

// const data: IOrder[] = [
//     {
//         id:'1',
//         orderInfo: [{
//             price:'500',
//             quantity: '3',
//             name: 'Булка'
//         },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             }],
//         createdAt:'2022-01-31 18:00',
//         price: 400,
//         status: 'Готово',
//     },
//     {
//         id:'1',
//         orderInfo: [{
//             price:'500',
//             quantity: '3',
//             name: 'Булка'
//         },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             }],
//         createdAt:'2022-01-31 18:00',
//         price: 400,
//         status: 'Готово',
//     },
//     {
//         id:'1',
//         orderInfo: [{
//             price:'500',
//             quantity: '3',
//             name: 'Булка'
//         },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             }],
//         createdAt:'2022-01-31 18:00',
//         price: 400,
//         status: 'Готово',
//     },
//     {
//         id:'1',
//         orderInfo: [{
//             price:'500',
//             quantity: '3',
//             name: 'Булка'
//         },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             }],
//         createdAt:'2022-01-31 18:00',
//         price: 400,
//         status: 'Готово',
//     },
//     {
//         id:'1',
//         orderInfo: [{
//             price:'500',
//             quantity: '3',
//             name: 'Булка'
//         },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             }],
//         createdAt:'2022-01-31 18:00',
//         price: 400,
//         status: 'Готово',
//     },
//     {
//         id:'1',
//         orderInfo: [{
//             price:'500',
//             quantity: '3',
//             name: 'Булка'
//         },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             }],
//         createdAt:'2022-01-31 18:00',
//         price: 400,
//         status: 'В обработке',
//     },  {
//         id:'1',
//         orderInfo: [{
//             price:'500',
//             quantity: '3',
//             name: 'Булка'
//         },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             }],
//         createdAt:'2022-01-31 18:00',
//         price: 400,
//         status: 'Готово',
//     },
//     {
//         id:'1',
//         orderInfo: [{
//             price:'500',
//             quantity: '3',
//             name: 'Булка'
//         },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             },
//             {
//                 price:'500',
//                 quantity: '3',
//                 name: 'Булка'
//             }],
//         createdAt:'2022-01-31 18:00',
//         price: 400,
//         status: 'В обработке',
//     },
// ]

export const OrdersList = ({className}: ordersListProps) => {
    const filter = useSelector(getOrderFilter);
    const {isLoading, isError, data} = useGetAllOrdersQuery();

    console.log(data)
    const filteredData = useMemo(() => {
        if (!data) return [];

        switch (filter) {
            case 'Готовы':
                return data.orders.filter(order => order.status === 'Готово');
            case 'В процессе':
                return data.orders.filter(order => order.status === 'В процессе');
            default:
                return data.orders;
        }
    }, [data, filter]);


    if(isLoading){
        return <LoadingPage/>
    }

    return (
        <div className={classNames(cls.ordersList, {}, [className])}>
            {filteredData && filteredData.map(item=>(
                <OrderCard key={item.id}  price={item.price}
                           orderInfo={item.orderInfo} status={item.status} createdAt={item.createdAt} id={item.id}/>
            ))}
        </div>
    )
}