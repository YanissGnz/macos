import MinimizeResizeClose from "../../components/MinimizeResizeClose";
import AppSideNav from "../../components/AppSideNav";

const navConfig = [
	{
		subheader: "Favorites",
		items: [
			{
				name: "Airdrop",
				icon: "airdrop.svg",
				isActive: true,
			},
			{
				name: "Recents",
				icon: "recent.svg",
				isActive: false,
			},
			{
				name: "Applications",
				icon: "app-store.svg",
				isActive: false,
			},
			{
				name: "Desktop",
				icon: "desktop.svg",
				isActive: false,
			},
			{
				name: "Documents",
				icon: "file.svg",
				isActive: false,
			},
			{
				name: "Downloads",
				icon: "download.svg",
				isActive: false,
			},
			{
				name: "Pictures",
				icon: "picture.svg",
				isActive: false,
			},
			{
				name: "Music",
				icon: "music.svg",
				isActive: false,
			},
			{
				name: "Movies",
				icon: "movie.svg",
				isActive: false,
			},
		],
	},
	{
		subheader: "iCloud",
		items: [
			{
				name: "iCloud Drive",
				icon: "iCloud.svg",
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
