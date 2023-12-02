import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./expenseReducer";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
