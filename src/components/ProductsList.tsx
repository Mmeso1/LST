import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../services/productsApi";
import { increaseLimit, setProducts } from "../slices/productsSlice";
import type { RootState } from "../store";
import type { Product } from "../types";
import ProductCard from "./ProductCard";
// import app_styles from "../App.module.css";
import styles from "./styles/ProductSection.module.css";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { items, limit } = useSelector(
    (state: RootState) => state.products
  ) as {
    items: Product[];
    limit: number;
  };

  const { data } = useGetProductsQuery(limit);

  useEffect(() => {
    if (data && data.products) {
      dispatch(setProducts(data.products));
    }
  }, [data]);

  const handleLoadMore = () => {
    dispatch(increaseLimit());
  };

  return (
    <>
      <div className={styles.productsSectionGrid}>
        {items.map((product) => (
          <ProductCard product={product} />
        ))}
        {/* <ProductCard /> */}
      </div>
      {/* <button className={styles.viewAllButton} onClick={handleLoadMore}>
        Load More Products
      </button> */}
    </>
  );
};

export default ProductsList;
