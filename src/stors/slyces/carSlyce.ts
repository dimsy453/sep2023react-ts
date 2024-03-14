import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar} from "../../interfaces";
import {carsServices} from "../../services";


interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    trigger: boolean
}

const initialState: IState = {
    cars:[],
    carForUpdate: null,
    trigger: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlyce/getAll',
    async (_, {rejectWithValue}) =>{
        try {
            const {data} = await carsServices.getAll()
            return data
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car:ICar }>(
    'carSlyce/create',
    async ({car}, {rejectWithValue}) =>{
        try {
            await carsServices.create(car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, actions)=>{
            state.carForUpdate = actions.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addMatcher(isFulfilled(create), state =>{
                    state.trigger = !state.trigger
            })
})

const {reducer: carReducer, actions} = carSlice

const carActions = {
    ...actions,
    getAll,
    create
}

export {
    carReducer,
    carActions
}