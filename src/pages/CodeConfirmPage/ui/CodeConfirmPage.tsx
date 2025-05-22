import cls from './CodeConfirmPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames.ts";
import {AuthorizationFormCode} from "../../../features/Authorization";

interface CodeConfirmPageProps {
    className?: string;
}

const CodeConfirmPage = ({className}: CodeConfirmPageProps) => {
    return (
        <div className={classNames(cls.CodeConfirmPage, {}, [className])}>
            <AuthorizationFormCode/>
        </div>
    )
}

export default CodeConfirmPage;