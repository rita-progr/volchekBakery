import cls from './GoodsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {useNavigate, useParams} from "react-router-dom";
import {BunItems} from "../../../features/Buns";
import {MyText, TextAlign, TextSize, TextTheme} from "shared/ui/MyText/MyText.tsx";
import {usePrintTitle} from "shared/lib/hooks/usePrintTitle.tsx";
import Back from 'shared/assets/icons/back.svg?react'
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {CartActions, GoodsItem} from "../../../features/Cart";

interface GoodsPageProps {
    className?: string;
}



const GoodsPage = ({className}: GoodsPageProps) => {
    const {id} = useParams<{id: string}>();
    const title = usePrintTitle(id);
    const navigate = useNavigate();

    const onNavigate = useCallback(()=>{
        navigate(-1)
    },[navigate])

    const dispatch = useAppDispatch();

    const addItemToCart = useCallback((item: GoodsItem)=>{
        dispatch(CartActions.addItem(item.id))
    },[dispatch])

    // const addToCart = useCallback(() => {
    //     if (id) {
    //         dispatch(CartActions.addItem(id));
    //     }
    // }, [id, dispatch]);

    if(!id){
        return null;
    }

    return (
        <div className={classNames(cls.GoodsPage, {}, [className])}>
            <div className={cls.flex} onClick={onNavigate}>
                <Back className={cls.back}/>
            </div>
            <MyText title={title}
                    size={TextSize.LARGE}
                    align={TextAlign.CENTER}
                    theme={TextTheme.SECONDARY}
                    className={cls.text}/>
            <BunItems addItemToCart={addItemToCart} category={title}/>
        </div>
    )
}
export default GoodsPage