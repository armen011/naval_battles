import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PlayerType } from "../types";

const initialState: PlayerType = {
  id: "2",
  name: "User 2",
  ships: [],
  isValid: false,
};

export const secondPlayerSlice = createSlice({
  name: "second-player",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = secondPlayerSlice.actions;

export default secondPlayerSlice.reducer;
