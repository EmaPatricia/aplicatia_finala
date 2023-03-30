import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./Wishlist.style.css";

function Wishlist() {
	const [wishlistProducts, setWishlistProducts] = useState([]);

	useEffect(() => {
		const productsString = localStorage.getItem("produse");
		if (productsString !== null) {
			const produse = JSON.parse(productsString);
			setWishlistProducts(produse);
		}
	}, []);

	const onDelete = (produsId) => {
		const filteredProducts = wishlistProducts.filter(
			(produs) => produs.id !== produsId
		);
		localStorage.setItem("produse", JSON.stringify(filteredProducts));
		setWishlistProducts(filteredProducts);
	};

	return (
		<div className='wishlist d-flex'>
			<div>
				<img
					className='wishlist_pic d-flex'
					src='https://images.unsplash.com/photo-1679828485992-95fb004ec4f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
				/>

				<h2>My wishlist</h2>
			</div>
			<div className='wishlist_prod'>
				<ol>
					{wishlistProducts.map((produs, index) => {
						return (
							<li key={"produs_" + index} className='mt-2'>
								{produs.title} - {produs.price}
								<Button
									color='info'
									onClick={() => {
										onDelete(produs.id);
									}}>
									Delete
								</Button>
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
}

export default Wishlist;
