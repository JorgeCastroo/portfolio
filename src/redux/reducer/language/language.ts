import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  language: "portuguese" | "english" | "spanish";
}

const initialState: State = {
  language: "english",
};

const cartSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (
      state,
      action: PayloadAction<"portuguese" | "english" | "spanish">
    ) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = cartSlice.actions;
export default cartSlice.reducer;
