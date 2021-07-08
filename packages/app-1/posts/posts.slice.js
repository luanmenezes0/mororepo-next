import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  user: 'luan',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost(state, action) {
      state.posts.push(action.payload);
    },
  },
});

export const { createPost } = postsSlice.actions;

export default postsSlice.reducer;
