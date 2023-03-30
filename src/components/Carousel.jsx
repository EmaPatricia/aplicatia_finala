import Slides from "./Slides";
import { Link } from "react-router-dom";
import "./Carousel.style.css";

const Carousel = () => {
	const slides = [
		{ url: "https://s9.ro/1rkn" },
		{ url: "https://s9.ro/1rko" },
		{ url: "https://s9.ro/1rkp" },
		{ url: "https://s9.ro/1rkq" },
		{ url: "https://s9.ro/1rkr" },
	];
	const containerStyles = {
		width: "auto",
		height: "600px",
		margin: "0 auto",
	};
	return (
		<div>
			<div style={containerStyles}>
				<Slides slides={slides} />
			</div>
			<div className='campaign_content'>
				<h1>Spring edition!</h1>
				<p>Choose your style!</p>
				<Link to='/produse'>
					<button>DISCOVER NOW</button>
				</Link>
			</div>
		</div>
	);
};

export default Carousel;
