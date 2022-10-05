import FolderSvg from "../../components/FolderSvg";

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

function SideNav() {
	return (
		<div className="px-5 py-2">
			{navConfig.map((list) => (
				<div className="mb-2 w-max">
					<h6 className="text-[13px] font-semibold text-[#4a484a] opacity-85 ml-2">
						{list.subheader}
					</h6>

					{list.items.map((item) => (
						<div
							className={`${
								item.isActive
									? "fill-white text-white bg-blue-600"
									: "fill-blue-600 text-black"
							} 
                             flex flex-row items-center gap-2 cursor-pointer p-0.5 px-2 rounded-md
                            `}
						>
							<FolderSvg className="h-5 w-5" />
							<p className="text-[14px] flex-1 mr-3">{item.name}</p>
							<p
								className={`text-[14px] font-medium ${
									!item.isActive && "text-gray-500"
								}`}
							>
								{item.itemCount}
							</p>
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default SideNav;
