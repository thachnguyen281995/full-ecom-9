import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";
export const getColor = createAsyncThunk("color/get-colors", async (thunkAPI) => {
  try {
    return await colorService.getColor();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
const initialState = {
  color: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getColor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getColor.fulfilled, (state, action) => {
        (state.isLoading = false), (state.isError = false), (state.color = action.payload);
      })
      .addCase(getColor.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});
export default colorSlice.reducer;
