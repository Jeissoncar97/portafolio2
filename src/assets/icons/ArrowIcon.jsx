import * as React from "react";
const SvgComponent = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="#9fef00"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
	</svg>
);
export default SvgComponent;
