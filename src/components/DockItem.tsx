import { motion } from "framer-motion";
import { toggleMinimize, openApp, focus } from "../redux/appSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const variants = {
	hover: { y: -10 },
	tap: {
		y: 5,
		transition: {
			type: "tween",
			duration: 0.25,
		},
	},
};

interface DockItemProps {
	name: "finder" | "reminders" | "notes";
	icon?: string;
	key: number;
}

function DockItem({ name, icon, key }: DockItemProps) {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector((state) => state.apps[name].isOpen);
	const focused = useAppSelector((state) => state.apps.focused) === name;
	return (
		<motion.div
			key={key}
			whileHover="hover"
			whileTap="tap"
			className="h-14 w-14 flex flex-col items-center content-center cursor-pointer"
			onClick={() => {
				if (!isOpen) dispatch(openApp(name));
				else if (!focused) dispatch(focus(name));
				else dispatch(toggleMinimize(name));
			}}
		>
			<motion.img
				variants={variants}
				src={`assets/apps/${icon}`}
				alt={name}
				className="object-cover h-12 w-12"
				draggable={false}
			/>
			{isOpen && (
				<div className="w-1 h-1 bg-gray-900 bg-opacity-70 rounded-full"></div>
			)}
		</motion.div>
	);
}

export default DockItem;
