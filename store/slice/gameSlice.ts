import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICar {
  data: any;
  currIndex: number;
}

const initialState: ICar = {
  data: undefined,
  currIndex: 0,
};

export const CarSlice = createSlice({
  name: "car_slice",
  initialState,
  reducers: {
    changeCurrIndex: (state, action: PayloadAction<number>) => {
      state.currIndex = action.payload;
    },
  },
});

export const { changeCurrIndex } = CarSlice.actions;

export default CarSlice.reducer;
