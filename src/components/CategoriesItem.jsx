import { Link } from "react-router-dom";

function CategoriesItem({ name, image }) {
	const itemStyle = {
		height: "100%",
		position: "relative",
		color: "black",
		padding: "10px;",
	};
	const imageStyle = {
		width: "250px",
		height: "175px",
		position: "relative",
		margin: "5px",
	};

	const nameStyle = {
		position: "absolute",
		zIndex: 1,
		top: "70%",
		margin: "20px",
		fontSize: "20px",
	};

	const buttonStyle = {
		position: "absolute",
		zIndex: 1,
		top: "82%",
		right: "10px",
		margin: "25px",
		border: "none",
		background: "none",
		color: "black",
		fontSize: "15px",
	};

	return (
		<div style={itemStyle}>
			<img src={image} style={imageStyle}></img>
			<h3 style={nameStyle}> {name}</h3>
			<Link to='/produse'>
				<button style={buttonStyle}>Discover now</button>
			</Link>
		</div>
	);
}
export default CategoriesItem;
