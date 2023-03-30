import Carousel from "../components/Carousel";
import CategoriesList from "../components/CategoriesList";
import TrendingProducts from "../components/TrendingProducts";

function Home() {
	return (
		<>
			<div>
				<Carousel />
			</div>
			<div>
				<CategoriesList />
			</div>
			<div>
				<TrendingProducts />
			</div>
		</>
	);
}

export default Home;
