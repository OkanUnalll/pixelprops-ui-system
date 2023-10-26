export interface ICollepse {
    name: string;
    route: string;
    key: string | number;
}

export interface IRoute {
    name: string;
    route: string;
    collepse: ICollepse[];
    key: string | number;
};