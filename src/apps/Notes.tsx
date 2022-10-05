import { useRef } from "react";
import { motion } from "framer-motion";
// sections
import Sidebar from "../sections/notes/Sidebar";
import Topbar from "../sections/notes/Topbar";
import { useAppSelector } from "../redux/hooks";

function Notes() {
	const constraintsRef = useRef(null);
	const { isFullScreen, height, width } = useAppSelector(
		(state) => state.apps.notes
	);

	return (
		<motion.div
			ref={constraintsRef}
			className="w-screen mt-7 flex items-center justify-center"
			style={{ height: "calc(100vh - 100px)" }}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 0.3,
				}}
				drag
				dragConstraints={constraintsRef}
				dragElastic={0}
				dragMomentum={false}
				className={`max-h-full max-w-full bg-[#e7e2e6] ${
					isFullScreen ? " h-full w-full " : "rounded-lg"
				} drop-shadow-2xl flex flex-row transition-all duration-300`}
				style={!isFullScreen ? { height, width } : {}}
			>
				<Sidebar appName="notes" />
				<>
					<Topbar />
				</>
			</motion.div>
		</motion.div>
	);
}

export default Notes;
