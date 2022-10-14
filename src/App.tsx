// Components
import Dock from "./components/Dock";
import MenuBar from "./components/MenuBar";
// hooks
import { useAppSelector } from "./redux/hooks";
// Apps
import Notes from "./apps/Notes";
import Finder from "./apps/Finder";

function App() {
	const isNotesOpen = useAppSelector((state) => state.apps.notes.isOpen);
	const isFinderOpen = useAppSelector((state) => state.apps.finder.isOpen);

	return (
		<>
			<MenuBar />
			<div className="h-screen w-screen relative pt-7">
				{isNotesOpen && <Notes />}
				{isFinderOpen && <Finder />}
			</div>
			<Dock />
		</>
	);
}

export default App;
