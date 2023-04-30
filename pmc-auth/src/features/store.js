import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import { MODE } from "@/config";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: MODE === 'local',
});
