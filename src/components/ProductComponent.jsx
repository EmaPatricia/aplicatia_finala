import { Card, CardBody, CardText, CardTitle, Button, Col } from "reactstrap";

function ProductComponent({ produs }) {
	const addToWishlist = () => {
		const productsString = localStorage.getItem("produse");

		if (productsString !== null) {
			const produse = JSON.parse(productsString);

			const existNr = produse.find((produsElement) => {
				return produsElement.id === produs.id;
			});

			if (existNr === undefined) {
				produse.push(produs);
			}

			localStorage.setItem("produse", JSON.stringify(produse));
		} else {
			const newProducts = [];
			newProducts.push(produs);
			localStorage.setItem("produse", JSON.stringify(newProducts));
		}
	};

	return (
		<Col className='mt-4 col-3'>
			<Card className='container-sm'>
				<img alt='Sample' src={produs.image} />
				<CardBody>
					<CardTitle tag='h5'>{produs.title}</CardTitle>
					<CardText>{produs.price}</CardText>
					<h6>{produs.category}</h6>
					<Button
						onClick={() => {
							addToWishlist();
						}}>
						Add to wishlist
					</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default ProductComponent;
