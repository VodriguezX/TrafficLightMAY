import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
const [selectedColor, setSelectedColor] = useState("green");

setSelectedColor

	return (
		<div className="traffic-light">
			<div className={"light red"+((selectedColor === "red") ? "glow" : "")}> a</div>
			<div className={"light yellow"+((selectedColor === "yellow") ? "glow" : "")}> b</div>
			<div className={"light green"+((selectedColor === "green") ? "glow" : "")}> c</div>
		</div>
	);
};

export default Home;
