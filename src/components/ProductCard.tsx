import styles from "./styles/ProductSection.module.css";
import type { Product } from "../types";

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

export default ProductCard;
