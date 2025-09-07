import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "@/lib/features/posts/postsSlice";

export const store = () => {
  return configureStore({
    reducer: {
      posts: postsReducer
    },
  });
};
