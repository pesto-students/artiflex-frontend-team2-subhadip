import * as apis from "../../apis";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  asyncStatus: "INIT",
  data: {},
  error: null,
};

// creating async action
export const login = createAsyncThunk(
  "auth/login",
  async (payload = { email: "", password: "" }, thunkApi) => {
    try {
      const response = await apis.login(payload);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data || { data: error.message }
      );
    }
  }
);

// creating async action
export const register = createAsyncThunk(
  "auth/register",
  async (
    payload = {
      first_name: "",
      last_name: "",
      email: "",
      mobile_no: "",
      password: "",
    },
    thunkApi
  ) => {
    try {
      const response = await apis.register(payload);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data || { data: error.message }
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.asyncStatus = "LOADING";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.asyncStatus = "SUCCESS";
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.asyncStatus = "FAILURE";
        state.error = action.payload.data;
      });

    builder
      .addCase(register.pending, (state, action) => {
        state.asyncStatus = "LOADING";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.asyncStatus = "SUCCESS";
        state.data = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.asyncStatus = "FAILURE";
        state.error = action.payload.data;
      });
  },
});

export default authSlice.reducer;
