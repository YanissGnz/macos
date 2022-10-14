import SideNavListItem from "./SideNavListItem";

function AppSideNav({ navConfig }: { navConfig: Array<any> }) {
	return (
		<div className="px-5 py-2">
			{navConfig.map((list, index) => (
				<div key={index} className="mb-2 w-max">
					<h6 className="text-[13px] font-semibold text-[#4a484a] opacity-85 ml-2">
						{list.subheader}
					</h6>

					{list.items.map((item: any, i: number) => (
						<SideNavListItem key={i} item={item} />
					))}
				</div>
			))}
		</div>
	);
}

export default AppSideNav;
