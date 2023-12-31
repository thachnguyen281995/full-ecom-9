import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import brandService from './brandService'
export const getBrands = createAsyncThunk(
  "brand/get-brands",
  async(thunkAPI) => {
    try{
      return await brandService.getBrands(); 
    }
    catch(error){
      return thunkAPI.rejectWithValue(error)
    }
  }
)
const initialState = {
  brands:[],
  isError : false,
  isLoading:false,
  isSuccess:false,
  message:""
}
export const brandSlice = createSlice({
  name:"brands",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
    .addCase(getBrands.pending,(state) => {
      state.isLoading = true
    })
    .addCase(getBrands.fulfilled,(state,action) => {
      state.isLoading = false,
      state.isError = false,
      state.brands = action.payload
    })
    .addCase(getBrands.rejected,(state,action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      state.isLoading = false;
    })
  }
})
export default brandSlice.reducer;