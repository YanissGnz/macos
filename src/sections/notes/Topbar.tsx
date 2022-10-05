import React from "react";

function Topbar() {
	return (
		<div className="w-full h-min bg-white cflex flex-row gap-2 items-start p-2">
			<div className="cursor-pointer">
				<img src="assets/icons/list.png" alt="List" className="h-8 w-8" />
			</div>
		</div>
	);
}

export default Topbar;
