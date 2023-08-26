import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import blogCategoryService from "./bcategoryService";
export const getBlogCategory = createAsyncThunk("blogcategory/get-blogcategory",async(thunkAPI) => {
  try {
    return await blogCategoryService.getBlogCategory();
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
const initialState = {
  blogcategory : [],
  isError:false,
  isLoading:false,
  isSuccess : false,
  message:""
}
export const blogSlice = createSlice({
  name:"blogcategory",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
    .addCase(getBlogCategory.pending,(state) => {
      state.isLoading = true
    })
    .addCase(getBlogCategory.fulfilled,(state,action) => {
      state.isLoading = false,
      state.isError = false,
      state.blogcategory = action.payload
    })
    .addCase(getBlogCategory.rejected,(state,action) => {
      state.isError = true,
      state.isLoading = false,
      state.message = action.error,
      state.isLoading = false
    })
  }
})
export default blogSlice.reducer;