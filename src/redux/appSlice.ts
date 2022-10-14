import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	focused: "",
	notes: {
		isOpen: false,
		isFullScreen: false,
		isMinimized: false,
		isFocused: false,
		width: "1200px",
		height: "600px",
	},
	finder: {
		isOpen: false,
		isFullScreen: false,
		isMinimized: false,
		isFocused: false,
		width: "1200px",
		height: "600px",
	},
	reminders: {
		isOpen: false,
		isFullScreen: false,
		isMinimized: false,
		isFocused: false,
		width: "1200px",
		height: "600px",
	},
};

export const appsSlice = createSlice({
	name: "apps",
	initialState,
	reducers: {
		openApp: (
			state,
			action: PayloadAction<"notes" | "finder" | "reminders">
		) => {
			state[action.payload].isOpen = true;
		},
		closeApp: (
			state,
			action: PayloadAction<"notes" | "finder" | "reminders">
		) => {
			state[action.payload].isOpen = false;
			state[action.payload].isMinimized = false;
			state.focused = action.payload;
		},
		toggleFullScreen: (
			state,
			action: PayloadAction<"notes" | "finder" | "reminders">
		) => {
			state[action.payload].isFullScreen = !state[action.payload].isFullScreen;
		},
		toggleMinimize: (
			state,
			action: PayloadAction<"notes" | "finder" | "reminders">
		) => {
			state[action.payload].isMinimized = !state[action.payload].isMinimized;
		},
		focus: (state, action: PayloadAction<"notes" | "finder" | "reminders">) => {
			state.focused = action.payload;
		},
	},
});

export const { openApp, closeApp, toggleFullScreen, toggleMinimize, focus } =
	appsSlice.actions;

export default appsSlice.reducer;
