import {apiServices} from "./apiServices";
import {urls} from "../constants";
import {IRes} from "../types";
import {ICar} from "../interfaces";

const carsServices ={
    getAll:(): IRes<ICar[]> => apiServices.get(urls.cars.base),
    create:(data:ICar): IRes<ICar> => apiServices.post(urls.cars.base, data),
    getById:(id:number, data:ICar): IRes<ICar> => apiServices.put(urls.cars.byId(id), data),
    deleteDyId:(id:number): IRes<void> => apiServices.delete(urls.cars.byId(id))
}

export {
    carsServices
}