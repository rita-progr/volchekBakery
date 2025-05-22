import cls from './AboutPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {MyText, TextAlign, TextSize} from "shared/ui/MyText/MyText.tsx";
import {CardWithPin} from "shared/ui/CardWithPin/CardWithPin.tsx";
import {Button, ButtonTheme} from "shared/ui/Button/Button.tsx";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "shared/config/route/routeConfig.tsx";

interface AboutPageProps {
    className?: string;
}

const AboutPage = ({className}: AboutPageProps) => {
    const navigate = useNavigate();
    const onNavigate = useCallback(()=>{
        navigate(RoutePath.catalog)
    },[navigate])

    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
            <MyText title = {"О нас"} size={TextSize.LARGE} className={cls.title}/>
            <MyText title = {"Добро пожаловать в «Вольчека» — уютную пекарню, где каждый день пекутся свежие булочки, ароматный хлеб и домашние сладости. Мы создали это место с любовью к добрым традициям, качественным продуктам и заботе о каждом госте."} size={TextSize.MEDIUM}/>
            <MyText title = {"Название нашей пекарни — «Вольчека» — родилось не случайно. Оно сочетает в себе тепло домашнего очага и свободу вкуса, ведь у нас каждый может выбрать то, что по душе: от классического бородинского хлеба до авторских десертов и сезонных новинок."} size={TextSize.MEDIUM}/>
            <MyText title = {"Мы верим, что хороший хлеб способен сделать день лучше, а чашка ароматного кофе с круассаном — подарить мгновение счастья. Поэтому каждое утро наши пекари начинают работу задолго до рассвета, чтобы вы могли наслаждаться выпечкой, согретой теплом духовок."} size={TextSize.MEDIUM}/>
            <MyText title = {"Почему выбирают нас ?"} size={TextSize.XMEDIUM} className={cls.sbt}/>
            <div className={cls.grid}>
                    <CardWithPin className={cls.pin}>
                        <MyText text={"Свежая выпечка ежедневно"} size={TextSize.XMEDIUM}/>
                        <MyText text={"Mы печём без полуфабрикатов и заморозки."} size={TextSize.SMALL}/>
                    </CardWithPin>
                    <CardWithPin className={cls.pin}>
                        <MyText text={"Натуральные ингредиенты "} size={TextSize.XMEDIUM}/>
                        <MyText text={"Никаких искусственных добавок, только мука высшего сорта, свежие яйца, натуральное масло и дрожжи."} size={TextSize.SMALL}/>
                    </CardWithPin>
                    <CardWithPin className={cls.pin}>
                        <MyText text={"Забота о клиентах"} size={TextSize.XMEDIUM}/>
                        <MyText text={"Мы любим общаться с нашими гостями и стараемся учитывать каждое пожелание."} size={TextSize.SMALL}/>
                    </CardWithPin>
                    <CardWithPin className={cls.pin}>
                        <MyText text={"Уютная атмосфера"} size={TextSize.XMEDIUM}/>
                        <MyText text={"Заходите не спеша попить кофе, попробовать десерты или просто насладиться запахом свежего хлеба.\n"} size={TextSize.SMALL}/>
                    </CardWithPin>
            </div>
            <Button theme = {ButtonTheme.PRIMARY} className={cls.btn} onClick={onNavigate}>
                <MyText text={'В каталог'} size={TextSize.MEDIUM} align={TextAlign.CENTER}/>
            </Button>
        </div>
    )
}

export default AboutPage;