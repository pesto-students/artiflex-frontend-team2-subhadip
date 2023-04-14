import * as apis from "../../apis";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  asyncStatus: "INIT",
  data: {},
  error: null,
};

// creating async action
export const createPost = createAsyncThunk(
  "post/createPost",
  async (payload = { title: "", description: "", post_type: "" }, thunkApi) => {
    try {
      const response = await apis.createPost(payload);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data || { data: error.message }
      );
    }
  }
);

// creating async action for image post
export const createPostForImage = createAsyncThunk(
  "post/createPostForImage",
  async (payload = { title: "", post_url: "", post_type: "" }, thunkApi) => {
    try {
      const response = await apis.createPostForImage(payload);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data || { data: error.message }
      );
    }
  }
);

// creating async action for image post
export const getAllPosts = createAsyncThunk(
  "post/posts",
  async (payload = {}, thunkApi) => {
    try {
      const response = await apis.getAllPosts(payload);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data || { data: error.message }
      );
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state, action) => {
        state.asyncStatus = "LOADING";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.asyncStatus = "SUCCESS";
        state.data = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.asyncStatus = "FAILURE";
        state.error = action.payload.data;
      });

    builder
      .addCase(createPostForImage.pending, (state, action) => {
        state.asyncStatus = "LOADING";
      })
      .addCase(createPostForImage.fulfilled, (state, action) => {
        state.asyncStatus = "SUCCESS";
        state.data = action.payload;
      })
      .addCase(createPostForImage.rejected, (state, action) => {
        state.asyncStatus = "FAILURE";
        state.error = action.payload.data;
      });

    builder
      .addCase(getAllPosts.pending, (state, action) => {
        state.asyncStatus = "LOADING";
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.asyncStatus = "SUCCESS";
        state.data = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.asyncStatus = "FAILURE";
        state.error = action.payload.data;
      });
  },
});

export default postSlice.reducer;
