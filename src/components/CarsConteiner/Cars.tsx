import {FC, PropsWithChildren, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../stors";
import {Car} from "./Car";

interface IProps extends PropsWithChildren{

}
const Cars: FC<IProps> = () => {
   const {cars, trigger}  = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [trigger]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
}