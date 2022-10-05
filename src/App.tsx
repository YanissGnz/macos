// Components
import Dock from "./components/Dock";
import MenuBar from "./components/MenuBar";
// Apps
import Notes from "./apps/Notes";
import { useAppSelector } from "./redux/hooks";

function App() {
	const isNotesOpen = useAppSelector((state) => state.apps.notes.isOpen);

	return (
		<>
			<MenuBar />
			{isNotesOpen && <Notes />}
			<Dock />
		</>
	);
}

export default App;
