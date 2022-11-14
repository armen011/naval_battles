import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PlayerType } from "../types";

const initialState: PlayerType = {
  id: "1",
  name: "User1",
  ships: [],
  isValid: false,
};

export const firstPlayerSlice = createSlice({
  name: "first-player",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    selectShip: (state, action: PayloadAction<string>) => {
      if (state.ships.length !== 5) {
        state.ships.push(action.payload);
      }
    },
  },
});

export const { changeName, selectShip } = firstPlayerSlice.actions;

export default firstPlayerSlice.reducer;
