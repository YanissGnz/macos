import SvgIcon from "./SvgIcon";

const getIcon = (icon: string) => (
	<SvgIcon src={`/assets/icons/${icon}`} height={24} width={24} />
);

function SideNavListItem({
	item,
}: {
	item: { name: string; icon: string; isActive: boolean; itemCount: number };
}) {
	return (
		<div
			className={`flex flex-row items-start gap-2 cursor-pointer p-0.5 px-2 rounded-md ${
				item.isActive && "bg-gray-600 bg-opacity-20"
			}`}
		>
			<div className="h-4 w-4 mr-1 text-blue-600">{getIcon(item.icon)}</div>
			<p className="text-[14px] flex-1 min-w-[100px] mr-3">{item.name}</p>
			<p
				className={`text-[14px] font-medium ${
					!item.isActive && "text-gray-500"
				}`}
			>
				{item.itemCount}
			</p>
		</div>
	);
}

export default SideNavListItem;
