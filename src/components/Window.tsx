import React from "react";
import { motion } from "framer-motion";
// hooks
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { focus } from "../redux/appSlice";

import { variants } from "../animation/variants";

function Window({
	children,
	appName,
}: {
	children: React.ReactNode | React.ReactNode[];
	appName: "notes" | "finder" | "reminders";
}) {
	const dispatch = useAppDispatch();
	const { isFullScreen, isMinimized } = useAppSelector(
		(state) => state.apps[appName]
	);
	const focused = useAppSelector((state) => state.apps.focused) === appName;

	return (
		<motion.div
			initial={{ display: "none" }}
			animate={isMinimized ? "minimize" : { display: "block" }}
			transition={{
				duration: 0,
			}}
			variants={variants}
			drag
			dragElastic={0}
			dragMomentum={false}
			dragConstraints={{ left: 0, top: 0 }}
			onDragStart={() => dispatch(focus(appName))}
			className={`
			max-h-full max-w-screen backdrop-sepia-0 backdrop-blur-2xl bg-red-200 bg-opacity-40 absolute transition-all duration-[0ms] 
			${
				isFullScreen
					? "  h-full w-full !translate-x-0 !translate-y-0  !duration-100 "
					: "rounded-lg h-[600px] w-[1200px]"
			} 
			${focused && "z-10"} drop-shadow-2xl flex flex-row  overflow-hidden
			`}
			onClick={() => dispatch(focus(appName))}
		>
			{children}
		</motion.div>
	);
}

export default Window;
