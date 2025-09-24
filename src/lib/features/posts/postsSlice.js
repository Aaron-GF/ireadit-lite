import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setPosts: (_, action) => action.payload,
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
