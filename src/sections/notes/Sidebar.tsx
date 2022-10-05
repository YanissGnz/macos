import MinimizeResizeClose from "./MinimizeResizeClose";
import SideNav from "./SideNav";

function Sidebar({ appName }: { appName: "notes" }) {
	return (
		<div className=" h-full w-max">
			<MinimizeResizeClose appName={appName} />
			<SideNav />
		</div>
	);
}

export default Sidebar;
