import {AxiosResponse} from "axios";
import {ICar} from "../iterfaces/carInterface";

type IRes<T> = Promise<AxiosResponse<T>>

export type {
    IRes
}