import { motion } from "framer-motion";
import moment from "moment";
// Components
import AppleLogo from "./AppleLogo";
// mocks
import { menuBarIcons, menuBarItems } from "../mocks/MenuBarItems";

function MenuBar() {
	return (
		<motion.div
			animate={{ y: [-100, 0] }}
			transition={{ delay: 0.5 }}
			className="fixed top-0 w-full backdrop-sepia-0 bg-white/30  flex flex-row px-5 items-center justify-between gap-4 z-50"
		>
			<div className="flex flex-row items-center gap-4 h-4">
				<AppleLogo className="text-black h-4 w-4 mr-2" color="black" />
				{menuBarItems.map((item, i) => (
					<h6
						key={i}
						className={`cursor-pointer text-sm ${item.isBold && "font-bold"}`}
					>
						{item.label}
					</h6>
				))}
			</div>
			<div className=" flex flex-row items-center gap-2">
				{menuBarIcons.map((item, i) => (
					<div className="cursor-pointer hover:bg-gray-300 p-1 px-3">
						<img
							className="h-5 w-5 "
							src={`/assets/icons/${item.icon}`}
							alt={item.name}
						/>
					</div>
				))}
				<h6 className="text-sm">
					{moment().format(`ddd MMM YY`)} &nbsp;&nbsp;
					{moment().format(`hh:mm A`)}
				</h6>
			</div>
		</motion.div>
	);
}

export default MenuBar;
