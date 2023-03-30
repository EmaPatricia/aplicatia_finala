import CategoriesItem from "./CategoriesItem";
import { useState } from "react";
import "./CategoriesList.style.css";

function CategoriesList() {
	const [categories, setCategories] = useState([
		{ category: "Clothes", image: "https://s9.ro/1rkr" },
		{ category: "Jewellery", image: "https://s9.ro/1rku" },
		{ category: "Accesories", image: "https://s9.ro/1rks" },
	]);

	return (
		<div className='categoriesListStyle'>
			{categories.map((category, index) => {
				return (
					<CategoriesItem
						name={category.category}
						image={category.image}
						key={"category_" + index}
					/>
				);
			})}
		</div>
	);
}

export default CategoriesList;
