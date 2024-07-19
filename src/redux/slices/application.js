import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios'

export const fetchApplication = createAsyncThunk("/auth/fetchApplication", async (params) => {
    const { data } = await axios.post("/application", params);
    return data;
  }
);

const initialState = {
    data: null,
    status: 'loading',
}

const applicationSlice = createSlice({
  name: "application",
  initialState,
  extraReducers: (bulder) => {
    bulder
      .addCase(fetchApplication.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchApplication.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchApplication.rejected, (state) => {
        state.data = null;
        state.status = "error";
      });
  },
});


export const applicationReducer = applicationSlice.reducer