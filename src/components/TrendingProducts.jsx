import "./TrendingProducts.style.css";
import TrendingProductsList from "./TrendingProductsList";

function TrendingProducts() {
	return (
		<>
			<div className='trendDescription'>
				<h1>Trending Products</h1>
				<h6>"You must have them!"</h6>
			</div>

			<TrendingProductsList />
		</>
	);
}

export default TrendingProducts;
