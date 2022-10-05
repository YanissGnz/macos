import React from "react";

function FolderSvg({ ...other }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			width="48"
			height="48"
			viewBox="0 0 64 64"
			{...other}
		>
			<path d="M 16 13 C 12.691 13 10 15.691 10 19 L 10 45 C 10 48.309 12.691 51 16 51 L 48 51 C 51.309 51 54 48.309 54 45 L 54 23 C 54 19.691 51.309 17 48 17 L 29.103516 17 C 28.198516 17 27.312422 16.689047 26.607422 16.123047 L 24.894531 14.753906 C 23.481531 13.623906 21.706484 13 19.896484 13 L 16 13 z M 16 17 L 19.896484 17 C 20.801484 17 21.688531 17.310953 22.394531 17.876953 L 24.105469 19.246094 C 25.518469 20.376094 27.293516 21 29.103516 21 L 48 21 C 49.103 21 50 21.897 50 23 L 50 24 L 14 24 L 14 19 C 14 17.897 14.897 17 16 17 z M 14 28 L 50 28 L 50 45 C 50 46.103 49.103 47 48 47 L 16 47 C 14.897 47 14 46.103 14 45 L 14 28 z"></path>
		</svg>
	);
}

export default FolderSvg;
