import cls from './ErrorPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {MyText} from "shared/ui/MyText/MyText.tsx";

interface ErrorPageProps {
    className?: string;
}

const ErrorPage = ({className}: ErrorPageProps) => {
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <MyText title={"Упс! Страница не найдена"}/>
        </div>
    )
}

export default ErrorPage;