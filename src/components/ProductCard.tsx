import styles from "./styles/ProductSection.module.css";
import product from "../assets/product-placeholder.svg";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img src={product} alt="product placeholder" />
      <div className={styles.productCardContent}>
        <h3>Product Name</h3>
        <p>Product Description</p>
        <div className={styles.productPrice}>
          <p>$16.48</p>
          <p>$6.48</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
