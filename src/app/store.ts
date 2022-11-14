import { configureStore } from "@reduxjs/toolkit";

import firstPlayerReducer from "../features/firstPlayer";
import secondPlayerReducer from "../features/secondPlayer";

export const store = configureStore({
  reducer: {
    firstPlayer: firstPlayerReducer,
    secondPlayer: secondPlayerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
