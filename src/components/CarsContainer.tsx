import {useEffect, useState} from "react";

import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";
import {ICar} from "../iterfaces/carInterface";
import {carService} from "../services/carService";

const CarsContainer = () => {

    const [cars, setCars] = useState<ICar []>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate,setCarForUpdate] = useState<ICar>(null)


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    const changeTrigger = () => {
        setTrigger(prevState => !prevState)
    }


    return (
        <div>
            <CarsForm changeTrigger={changeTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>
        </div>
    );
};

export {CarsContainer}