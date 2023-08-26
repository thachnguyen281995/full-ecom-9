import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import enquiryService from './EnquiryService'
export const getEnquiry = createAsyncThunk('enquiry/get-enquiries',async(thunkAPI) => {
  try {
    return enquiryService.getEnquiry()
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})
const initialState = {
  enquiries :[],
  isError:false,
  isLoading:false,
  isSuccess : false,
  message:""
}
export const enquirySlice = createSlice({
  name:'enquires',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder 
    .addCase(getEnquiry.pending,(state) => {
      state.isLoading = true;
    })
    .addCase(getEnquiry.fulfilled,(state,action) => {
      state.isLoading = false,
      state.isError = false,
      state.isSuccess = true,
      state.enquiries = action.payload
    })
    .addCase(getEnquiry.rejected,(state,action) => {
      state.isLoading = false,
      state.isError = true,
      state.isSuccess = true,
      state.message = action.error
    })
  }
})
export default enquirySlice.reducer