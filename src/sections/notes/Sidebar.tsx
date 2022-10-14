import MinimizeResizeClose from "../../components/MinimizeResizeClose";
import AppSideNav from "../../components/AppSideNav";

const navConfig = [
	{
		subheader: "iCloud",
		items: [
			{
				name: "All Icloud",
				icon: "folder.svg",
				itemCount: 3,
				isActive: true,
			},
			{
				name: "Notes",
				icon: "folder.svg",
				itemCount: 2,
				isActive: false,
			},
			{
				name: "Recently Deleted",
				icon: "folder.svg",
				itemCount: 1,
				isActive: false,
			},
		],
	},
	{
		subheader: "On My Mac",
		items: [
			{
				name: "Notes",
				icon: "folder.svg",
				itemCount: 2,
				isActive: false,
			},
		],
	},
];

function Sidebar({ appName }: { appName: "notes" | "finder" }) {
	return (
		<div className=" h-full w-max">
			<MinimizeResizeClose appName={appName} />
			<AppSideNav navConfig={navConfig} />
		</div>
	);
}

export default Sidebar;
