// ----------------------------------------------------------------------

interface SvgIconProps {
	src: string;
	style?: object;
	[key: string]: any;
}

export default function SvgIcon({ src, style }: SvgIconProps) {
	return (
		<span
			className="h-full w-full inline-block bg-current "
			style={{
				mask: `url(${src}) no-repeat center / contain`,
				WebkitMask: `url(${src}) no-repeat center / contain`,
				...style,
			}}
		/>
	);
}
