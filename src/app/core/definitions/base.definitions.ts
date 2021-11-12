import { IAd } from "./ads.definitions";

export interface IBaseData {
    ads: IAd[],
    favorites: number[];
}