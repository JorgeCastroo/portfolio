import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  theme: boolean;
}

const initialState: State = {
  theme: true,
};

const cartSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = cartSlice.actions;
export default cartSlice.reducer;
