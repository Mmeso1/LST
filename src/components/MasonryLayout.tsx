import React from "react";
import styles from "./styles/MasonryLayout.module.css";
import HeroProductCard from "./HeroProductCard";

interface MasonryItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface MasonryLayoutProps {
  items: MasonryItem[];
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ items }) => {
  return (
    <div className={styles.masonryContainer}>
      <div className={styles.masonryGrid}>
        {/* First item - full height on desktop */}
        <HeroProductCard
          image={items[0].image}
          description={items[0].description}
          title={items[0].title}
        />

        {/* Right side grid */}
        <div className={styles.rightGrid}>
          {/* Second item - full width */}
          <div className={styles.masonryItem}>
            <HeroProductCard
              image={items[1].image}
              description={items[1].description}
              title={items[1].title}
            />
          </div>

          {/* Bottom items container */}
          <div className={styles.bottomItems}>
            {/* Third item */}
            <div className={styles.masonryItem}>
              <HeroProductCard
                image={items[2].image}
                description={items[2].description}
                title={items[2].title}
              />
            </div>

            {/* Fourth item */}
            <div className={styles.masonryItem}>
              <HeroProductCard
                image={items[3].image}
                description={items[3].description}
                title={items[3].title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryLayout;
