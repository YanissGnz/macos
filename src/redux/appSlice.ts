import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	notes: {
		isOpen: false,
		isFullScreen: false,
		width: "1200px",
		height: "600px",
	},
};

export const appsSlice = createSlice({
	name: "apps",
	initialState,
	reducers: {
		openApp: (state, action: PayloadAction<"notes">) => {
			state[action.payload].isOpen = true;
		},
		closeApp: (state, action: PayloadAction<"notes">) => {
			state[action.payload].isOpen = false;
		},
		toggleFullScreen: (state, action: PayloadAction<"notes">) => {
			state[action.payload].isFullScreen = !state[action.payload].isFullScreen;
		},
	},
});

export const { openApp, closeApp, toggleFullScreen } = appsSlice.actions;

export default appsSlice.reducer;
