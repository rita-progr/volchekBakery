export interface ItemsListInterface{
    id?: number;
    path:string;
    icon?:React.FC<React.SVGProps<SVGSVGElement>>;
    title:string;
    className:string;
    authOnly?:boolean;
}

export interface SideBarSchema {
    collapsed:boolean;
}