// components
import Window from "../components/Window";
// sections
import AppSidebar from "../sections/notes/Sidebar";
import Topbar from "../sections/notes/Topbar";

function Notes() {
	return (
		<Window appName="notes">
			<AppSidebar appName="notes" />
			<div className="flex flex-col w-full">
				<Topbar />
				<div className="w-full flex-1 bg-white"></div>
			</div>
		</Window>
	);
}

export default Notes;
