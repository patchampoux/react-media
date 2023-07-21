import {useState} from "react";
import {GoChevronDown, GoChevronUp} from "react-icons/go";
import Button from "./Button";

function ExpandablePanel({header, children}) {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded((current) => !current);
	}

	return (
		<div className="mb-2 border rounded">
			<div className="flex p-2 justify-between items-center select-none">
				<div className="flex flex-row items-center justify-between">
					{header}
				</div>
				<Button className="cursor-pointer" onClick={handleClick}>
					{expanded ? <GoChevronUp /> : <GoChevronDown />}
				</Button>
			</div>
			{
				expanded && <div className="p-2 border-t">{children}</div>
			}
		</div>
	);
}

export default ExpandablePanel;
