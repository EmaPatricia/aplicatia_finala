import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.style.css";
import Products from "./pages/Products";

function App() {
	return (
		<div className='app'>
			<Navigation />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/produse' element={<Products />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route
					path='*'
					element={
						<Link to={"./home"}>
							<button>GO TO HOMEPAGE</button>
						</Link>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
