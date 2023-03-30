import { useEffect, useState } from "react";
import { Spinner, Input, Row, Button, Badge } from "reactstrap";
import ProductComponent from "../components/ProductComponent";
import "./Products.style.css";

function Products() {
	const [productList, setProductList] = useState(null);
	const [categoryList, setCategoryList] = useState(null);

	const [textInput, setTextInput] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((productListAPI) => setProductList(productListAPI));

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categoryListAPI) => setCategoryList(categoryListAPI));
	}, []);
	return (
		<>
			{productList && categoryList ? (
				<div className='d-flex'>
					<div className='category_list m-4 d-flex flex-column'>
						<h5>Product Categories</h5>
						{categoryList.map((category, index) => {
							return (
								<Badge
									className='mt-2'
									key={"category_" + index}
									color={category === selectedCategory ? "info" : "secondary"}
									onClick={() => {
										setSelectedCategory(category);
									}}>
									{category}
								</Badge>
							);
						})}
						<br />
						<Button
							color='danger'
							size='sm'
							onClick={() => {
								setSelectedCategory(null);
							}}>
							Clear Filter!
						</Button>
					</div>
					<div className='product_list'>
						<h2>Search</h2>
						<Input
							className='w-25'
							value={textInput}
							onChange={(event) => {
								setTextInput(event.target.value);
							}}
						/>
						<Row>
							{productList
								.filter((produs) => {
									return (
										selectedCategory === null ||
										selectedCategory === produs.category
									);
								})
								.filter((produs) => {
									return (
										produs.title
											.toLowerCase()
											.includes(textInput.toLowerCase()) ||
										produs.category
											.toLowerCase()
											.includes(textInput.toLowerCase())
									);
								})
								.map((produs, index) => {
									return (
										<ProductComponent produs={produs} key={"produs_" + index} />
									);
								})}
						</Row>
					</div>
				</div>
			) : (
				<Spinner>Loading ...</Spinner>
			)}
		</>
	);
}

export default Products;
