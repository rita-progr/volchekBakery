import cls from './BunDetails.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useGetDetailsGoodsMutation} from "entities/BunDetails/api/BunDetailsApi.tsx";
import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {StateSchema} from "app/providers/StoreProvider";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {BunDetailsAction} from "entities/BunDetails/model/slices/BunDetailsSlice.tsx";
import {LoadingPage} from "pages/LoadingPage";
import {CartActions} from "features/Cart";

interface BunDetailsProps {
    className?: string;
    id?: string;
}

// const item:GoodsItem = {
//         id:123232,
//         title: 'Булочка',
//         description: 'Неотбеленная органическая пшеничная мука, цельнозерновая ржаная мука, вода, морская соль, дрожжи',
//         img:'',
//         price: 500,
//         proteins: 30,
//         calories: 400,
//         fats: 30,
//         carbohydrates: 100,
//         composition: 'Вода, соль, масло'
//     }


export const BunDetails = ({className, id}: BunDetailsProps) => {
    const [getDetails, {data, isLoading, isError}] = useGetDetailsGoodsMutation();
    const bunDetails = useSelector((state: StateSchema) => state.bun.bun);
    const dispatch = useAppDispatch();

    // if(!item){
    //     return   <div className={classNames(cls.BunDetails, {}, [className])}>
    //                 <MyText title={'Товар не найден'} size={TextSize.XMEDIUM}/>
    //              </div>
    // }

    useEffect(() => {
         getDetails(id).unwrap()
    },[])

    useEffect(() => {
        if(data){
            dispatch(BunDetailsAction.setBun(data))
            console.log(data)
        }
    }, [data, dispatch]);

    const addToCart = useCallback(() => {
        if (id) {
            dispatch(CartActions.addItem(id));
        }
    }, [id, dispatch]);

    if(!id || isLoading){
        return <LoadingPage/>
    }

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.BunDetails}>
                {bunDetails?.photo && bunDetails.photo.length > 0 ? <img src={bunDetails.photo} alt="" className={cls.img}/> : <div className={cls.mockImg}/>}
                <div className={cls.flexCol}>
                    <MyText text={bunDetails?.name} className={cls.title} size={TextSize.XMEDIUM}/>

                    <MyText text={bunDetails?.description} size={TextSize.SMALL}/>
                    <div className={cls.flex}>
                        <MyText text={'Состав: '} size={TextSize.SMALL}/>
                        <MyText text={bunDetails?.composition} size={TextSize.SMALL}/>
                    </div>
                    <MyText text={'Пищевая ценность: '}/>
                    <div className={cls.flex}>
                        <div className={cls.item}>
                            <MyText text={'Белки'} size={TextSize.SMALL}/>
                            <MyText text={`${bunDetails?.proteins} г`} size={TextSize.MEDIUM}/>
                        </div>
                        <div className={cls.item}>
                            <MyText text={'Жиры'} size={TextSize.SMALL}/>
                            <MyText text={`${bunDetails?.fats} г`} size={TextSize.MEDIUM}/>
                        </div>
                        <div className={cls.item}>
                            <MyText text={'Углеводы'} size={TextSize.SMALL}/>
                            <MyText text={`${bunDetails?.carbohydrates} г`} size={TextSize.MEDIUM}/>
                        </div>
                        <div className={cls.item}>
                            <MyText text={'Ккал'} size={TextSize.SMALL}/>
                            <MyText text={`${bunDetails?.calories}`} size={TextSize.MEDIUM}/>
                        </div>
                    </div>

                </div>
            </div>
            <div className={cls.Buy}>
                <Button theme={ButtonTheme.PRIMARY}
                        className={cls.btn}
                onClick={() => addToCart()}>
                    <MyText text={'Добавить в корзину'} size={TextSize.MEDIUM}/>
                </Button>
                <div className={cls.Price}>
                    <MyText text={'Цена:'} size={TextSize.MEDIUM}/>
                    <MyText text={`${bunDetails?.price} p`} size={TextSize.MEDIUM}/>
                </div>

            </div>


        </div>
    )
}