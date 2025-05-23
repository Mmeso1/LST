import styles from "./styles/MasonryLayout.module.css";

const HeroProductCard = ({
  image,
  description,
  title,
}: {
  image: string;
  description: string;
  title: string;
}) => {
  return (
    <div className={styles.masonryItem}>
      <img src={image} alt={title} />
      <div className={styles.itemContent}>
        <p className={styles.description}>{description}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.readMore}>Read More</p>
      </div>
    </div>
  );
};

export default HeroProductCard;
