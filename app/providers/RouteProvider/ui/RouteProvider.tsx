import {Route, RouteProps, Routes, useLocation} from "react-router-dom";
import {Suspense, useCallback, useEffect} from "react";
import './RouteProvider.scss';
import {RouteConfig} from "shared/config/route/routeConfig.tsx";
import {LoadingPage} from "pages/LoadingPage";


const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth' // Можно заменить на 'auto' для мгновенной прокрутки
        });
    }, [location.pathname]);

    return null;
};

export const RouteProvider = () => {
    const location = useLocation();


    const renderWithRouter = useCallback((route: RouteProps)=>{
        const element = (
            <Suspense fallback={<LoadingPage/>}>
                <div key = {location.pathname} className={'fade-in'}>
                    <ScrollToTop />
                    {route.element}
                </div>
            </Suspense>
        )
        return (
            <Route key = {route.path} path={route.path} element={element} />
        )
    }, [location.pathname])

    return (
            <Routes location={location} key = {location.pathname}>
                {Object.values(RouteConfig).map(renderWithRouter)}
            </Routes>
    )
}