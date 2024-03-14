import {FC, PropsWithChildren} from "react";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../stors";

interface IProps extends PropsWithChildren{
    car: ICar
}
const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useAppDispatch();


    return (
        <div>
            <div> id: {id}</div>
            <div> brand: {brand}</div>
            <div> price: {price}</div>
            <div> year: {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>UPDATE</button>
            <button>DELETE</button>
        </div>
    );
};

export {
    Car
}