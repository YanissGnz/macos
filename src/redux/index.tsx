import { configureStore } from "@reduxjs/toolkit";
import appsSlice from "./appSlice";

export const store = configureStore({
	reducer: {
		apps: appsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
