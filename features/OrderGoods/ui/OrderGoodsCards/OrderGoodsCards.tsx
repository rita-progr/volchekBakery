import cls from './OrderGoodsCards.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CardWithPin} from "shared/ui/CardWithPin/CardWithPin.tsx";
import {ItemCard} from "../../model/types/OrderGoodsSchema.ts";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useDeleteProductMutation} from "features/OrderGoods/api/OrderGoodsApi.tsx";
import {Loader} from "shared/ui/Loader/Loader.tsx";

interface OrderGoodsCardProps {
    className?: string;
    items?: ItemCard[];
}

export const OrderGoodsCards = ({className, items}: OrderGoodsCardProps) => {

    const [deleteProduct, {isLoading}] = useDeleteProductMutation();

    const onDeleteProduct = async (id: string)=>{
        try{
            await deleteProduct({id})
            if(!isLoading){
                window.location.reload()
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className={classNames(cls.OrderGoodsCard, {}, [className])}>
            {isLoading ?? <Loader/>}
            {items && items.length > 0 ? (
                items.map((item) => (
                    <CardWithPin className={cls.pin} key = {item.id}>
                        {item.photo ? <img src={item.photo} alt="карточка товара" className={cls.img}/> : <div className={cls.mockImg}/>}
                        <MyText text={item.name} size={TextSize.MEDIUM}/>
                        <MyText text={`${item.price.toString()} р`} size={TextSize.SMALL}/>
                        <Button className={cls.btn} theme={ButtonTheme.PRIMARY} onClick={()=>onDeleteProduct(item.id)}><MyText text={'Удалить товар'} size={TextSize.SMALL} align={TextAlign.CENTER}/></Button>
                    </CardWithPin>
                ))
            ):(
                <MyText title={'Упс ! Товары не найдены'} size={TextSize.XMEDIUM} align={TextAlign.CENTER}/>
            )}

        </div>
    )
}