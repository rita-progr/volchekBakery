import cls from './OrderFilter.module.scss';
import {Button} from "shared/ui/Button/Button.tsx";
import Filter from 'shared/assets/icons/Filter.svg?react'
import {useCallback, useState} from "react";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {useSelector} from "react-redux";
import {getOrderFilter} from "../../model/selectrors/getOrdersSelectors.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {orderActions} from "features/OrderManagment/model/slices/orderSlice.tsx";
import {FilterEnum} from "features/OrderManagment/model/types/orderSchema.ts";

interface OrderFilterProps {
    className?: string;
}


export const OrderFilter = ({className}: OrderFilterProps) => {
const filter = useSelector(getOrderFilter)
    const dispatch = useAppDispatch();
    const items = [
        {
            text: FilterEnum.ALL
        },
        {
            text: FilterEnum.PENDING
        },
        {
            text: FilterEnum.READY
        },
    ]

    const [visible, setVisible] = useState(false);


    const onClickFilter = useCallback(()=>{
        setVisible(!visible);
    },[visible])

    const handleClick = useCallback((text: string)=>{
        dispatch(orderActions.setFilter(text));
        setVisible(false);
    },[dispatch])

    return (
        <div className={cls.relative}>
            <Button className={cls.btn} onClick={onClickFilter}>
                <Filter/>
            </Button>
            {visible && (
                <div className={cls.modal}>
                    {items.map(item=>(
                        <div key={item.text}  className={`${cls.text} ${filter === item.text ? cls.active : ''}`}onClick={() => handleClick(item.text)}>
                            <MyText text = {item.text} size={TextSize.SMALL}/>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}