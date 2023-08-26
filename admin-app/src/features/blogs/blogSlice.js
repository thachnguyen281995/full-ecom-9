import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import blogsService from "./blogService";
export const getBlogs = createAsyncThunk("blogs/get-blogs",async(thunkAPI) => {
  try {
    return await blogsService.getBlogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
const initialState = {
  blogs : [],
  isError:false,
  isLoading:false,
  isSuccess : false,
  message:""
}
export const blogSlice = createSlice({
  name:"blogs",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
    .addCase(getBlogs.pending,(state) => {
      state.isLoading = true
    })
    .addCase(getBlogs.fulfilled,(state,action) => {
      state.isLoading = false,
      state.isError = false,
      state.blogs = action.payload
    })
    .addCase(getBlogs.rejected,(state,action) => {
      state.isError = true,
      state.isLoading = false,
      state.message = action.error,
      state.isLoading = false
    })
  }
})
export default blogSlice.reducer;