import { motion } from "framer-motion";
// Components
import DockItem from "./DockItem";
// mocks
import { docksApps } from "../mocks/DockApps";

function Dock() {
	return (
		<div className="fixed bottom-1 w-full flex justify-center z-50">
			<motion.div
				animate={{ y: [100, 0] }}
				transition={{ delay: 0.5 }}
				className=" align-middle h-16 w-max max-w-3xl  backdrop-sepia-0 backdrop-blur-md bg-white/20 p-1 rounded-2xl flex flex-row"
			>
				{docksApps.map((item, i) =>
					item.type === "app" ? (
						<DockItem
							name={item.name as "finder" | "reminders" | "notes"}
							icon={item.icon}
							key={i}
						/>
					) : (
						<div className="w-[1.8px] h-11 bg-black opacity-20 rounded-full mt-1 mb-2" />
					)
				)}
			</motion.div>
		</div>
	);
}

export default Dock;
