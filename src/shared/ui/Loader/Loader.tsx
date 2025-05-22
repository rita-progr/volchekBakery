import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <span className="loader"></span>
    )
}