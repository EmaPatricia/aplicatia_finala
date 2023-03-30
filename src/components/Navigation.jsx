import { Link } from "react-router-dom";
import "./Navigation.style.css";

function Navigation() {
	return (
		<>
			<div className='navbar'>
				<div className='left_links'>
					<Link to='/home'>Home</Link>
					<Link to='/produse'>Produse</Link>
				</div>
				<div className='logo'>
					<h1>Outstock &trade;</h1>
				</div>
				<div className='right_link'>
					<Link to='/wishlist'>Wishlist</Link>
				</div>
			</div>
		</>
	);
}

export default Navigation;
