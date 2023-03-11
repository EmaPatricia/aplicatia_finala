import { Link } from "react-router-dom";
import "./Navigation.style.css";

function Navigation() {
	return (
		<div className='navbar_products'>
			<Link to='/home'>Home</Link>
			<Link to='/produse'>Produse</Link>
			<h1>Outstock</h1>
			<Link to='/wishlist'>Wishlist</Link>
		</div>
	);
}

export default Navigation;
