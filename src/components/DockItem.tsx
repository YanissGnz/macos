import { motion } from "framer-motion";
import { openApp } from "../redux/appSlice";
import { useAppDispatch } from "../redux/hooks";

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
	name?: string;
	icon?: string;
	key: number;
}

function DockItem({ name, icon, key }: DockItemProps) {
	const dispatch = useAppDispatch();
	return (
		<motion.div
			key={key}
			whileHover="hover"
			whileTap="tap"
			className="h-14 w-14 flex flex-col items-center content-center cursor-pointer"
			onClick={() => {
				dispatch(openApp("notes"));
			}}
		>
			<motion.img
				variants={variants}
				src={`assets/apps/${icon}`}
				alt={name}
				className="object-cover h-12 w-12"
				draggable={false}
			/>
			{/* <div className="w-1 h-1 bg-indigo-900 rounded-full"></div> */}
		</motion.div>
	);
}

export default DockItem;
