import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
  id: string | undefined;
  name: string | undefined;
}

const initialState: InitialState = {
  id: undefined,
  name: undefined,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setInitialState: (state, action: PayloadAction<InitialState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { setInitialState } = rootSlice.actions;
export default rootSlice.reducer;
