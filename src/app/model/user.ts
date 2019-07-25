export interface User {
    [id: string]: any;
    uId:number,
    name:string,
    email:string,
    phone:string,
    password:string,
    fbLink:string,
    twLink:string,
    place:string,
    favourites:number[]
}
