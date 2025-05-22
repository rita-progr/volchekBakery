import cls from './CategoryPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {ServiceList} from "widgets/ServiceList";

interface CategoryPageProps {
    className?: string;
}

const CategoryPage = ({className}: CategoryPageProps) => {
    return (
        <div className={classNames(cls.CategoryPage, {}, [className])}>
            <ServiceList/>
        </div>
    )
}

export default CategoryPage;