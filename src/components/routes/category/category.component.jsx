import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoryContainer, Title } from "./category.styles.jsx";
import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log("it's category", category);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title className="category-title">{category.toUpperCase()}</Title>
      <CategoryContainer className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
