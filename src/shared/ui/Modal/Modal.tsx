import cls from './Modal.module.scss';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {ReactNode, useCallback, useEffect, useRef} from "react";
import {Portal} from "shared/ui/Portal/Portal";
import {MyText, TextSize} from "shared/ui/MyText/MyText.tsx";


interface ModalProps{
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    isNavbar?: boolean;
    classNameOverlay?:string;
    textNavbar?:string;
}

export const Modal = (props:ModalProps) => {    const {
    children,
    className,
    isOpen,
    onClose,
    classNameOverlay,
    isNavbar = false,
    textNavbar = 'Контракт',
} = props;
    type Timeout = ReturnType<typeof setTimeout>;
    const timerRef = useRef<Timeout|null>(null);

    console.log("isOpen:", isOpen);

    const onKeyDown = useCallback( (e:KeyboardEvent) => {
        if(e.key === 'Esc'){
            onClose?.();
        }
    },[onClose]);

    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(()=>{

        if(isOpen){
            window.addEventListener("keydown", onKeyDown);
        }

        return ()=>{
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            window.removeEventListener("keydown", onKeyDown);
        }
    },[isOpen, onKeyDown]);

    const closeModal = () => {
        onClose?.();
        console.log('closeModal');
    }

    const mods:Mods={
        [cls.opened] : isOpen,
        [cls.closed]:!isOpen
    }


    return (
            <Portal>
                <>
                    {isOpen && (
                        <div className={classNames(cls.Modal, mods, [className])} onClick={closeModal}
                    >
                            {isNavbar && <div className={cls.navbar}>
                                <MyText text={textNavbar} size={TextSize.NAVBAR}/>
                            </div>
                            }

                            <div className={classNames(cls.overlay, {}, [classNameOverlay]) }>
                                <div
                                    className={cls.modalContent}

                                >
                                    <div onClick={onContentClick}>
                                        {children}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </>
            </Portal>
    )
}