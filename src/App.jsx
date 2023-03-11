import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produs from "./pages/Produs";
import Produse from "./pages/Produse";
import Wishlist from "./pages/Wishlist";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/produse' element={<Produse />} />
				<Route path='/produs' element={<Produs />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
			{/* FOOTER nu merge ca si componenta comuna, am incercat */}
		</div>
	);
}

export default App;
