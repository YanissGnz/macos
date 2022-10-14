// components
import SvgIcon from "../components/SvgIcon";
import Window from "../components/Window";
// sections
import AppSidebar from "../sections/finder/Sidebar";

function Finder() {
	return (
		<Window appName="finder">
			<div className="flex flex-row h-full w-full">
				<AppSidebar appName="finder" />

				<div className="bg-white h-full w-full">
					<div className="w-full h-12 flex flex-row items-center justify-start">
						<div className="h-10 w-10 ml-5 p-5 text-gray-500 hover:bg-slate-400 cursor-pointer rounded-md ">
							<SvgIcon src="/assets/icons/back.svg" />
						</div>
						<div className="h-5 w-5 ml-4 text-gray-500">
							<SvgIcon src="/assets/icons/forward.svg" />
						</div>
						<h6 className="ml-2 font-medium">Desktop - Local</h6>
						<div className="h-5 w-5 ml-10 text-gray-500">
							<SvgIcon src="/assets/icons/forward.svg" />
						</div>
					</div>
				</div>
			</div>
		</Window>
	);
}

export default Finder;
