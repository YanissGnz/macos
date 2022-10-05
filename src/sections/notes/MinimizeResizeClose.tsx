import React from "react";
import { closeApp, toggleFullScreen } from "../../redux/appSlice";
import { useAppDispatch } from "../../redux/hooks";

function MinimizeResizeClose({ appName }: { appName: "notes" }) {
	const dispatch = useAppDispatch();
	return (
		<div className="h-10 w-full p-5 py-6 flex flex-row items-center gap-2">
			<div
				className="h-3 w-3 rounded-full bg-red-500 cursor-pointer"
				onClick={() => {
					dispatch(closeApp(appName));
				}}
			/>
			<div
				className="h-3 w-3 rounded-full bg-yellow-500 cursor-pointer"
				onClick={() => {
					dispatch(toggleFullScreen(appName));
				}}
			/>
			<div className="h-3 w-3 rounded-full bg-green-500 cursor-pointer" />
		</div>
	);
}

export default MinimizeResizeClose;
