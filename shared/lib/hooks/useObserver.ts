import {RefObject, useEffect} from "react";

interface useObserverProps{
    callback?: () => void;
    ref: RefObject<HTMLDivElement | null>
    setIsVisible: (bool: boolean) => void;
}

export const useObserver = ({callback, ref, setIsVisible}:useObserverProps) => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Прекращаем наблюдение после первого появления
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Срабатывает когда 10% элемента видно
            }
        )

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, setIsVisible]);
}