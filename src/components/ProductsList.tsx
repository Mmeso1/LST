import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../services/productsApi";
import { setProducts } from "../slices/productsSlice";
import type { RootState } from "../store";
import type { Product } from "../types";
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

  return (
    <>
      <div className={styles.productsSectionGrid}>
        {items.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className={styles.productCard}>
      <img src={product.thumbnail} alt="product placeholder" />
      <div className={styles.productCardContent}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className={styles.productPrice}>
          <p>${product.price}</p>
          <p>${discountPrice}</p>
        </div>
      </div>
    </div>
  );
};
