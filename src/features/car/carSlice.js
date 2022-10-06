import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars:[]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setCars: (state, action) =>{
            state.cars = action.payload;
        }
    }
})

export const {setCars} = carSlice.actions;

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;