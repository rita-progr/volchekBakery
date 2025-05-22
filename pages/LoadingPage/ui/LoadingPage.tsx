import cls from './LoadingPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Loader} from "shared/ui/Loader/Loader.tsx";

interface LoadingPageProps {
    className?: string;
}

export const LoadingPage = ({className}: LoadingPageProps) => {
    return (
        <div className={classNames(cls.LoadingPage, {}, [className])}>
            <Loader/>
        </div>
    )
}