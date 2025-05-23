import styles from "./components/styles/ProductSection.module.css";
import { items, services } from "./data";
import app_styles from "./App.module.css";
import Navigation from "./components/Navigation";
import MasonryLayout from "./components/MasonryLayout";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Navigation />
      <main style={{ maxWidth: "100%", overflow: "hidden" }}>
        <MasonryLayout items={items} />
        {/* Products Section */}
        <section className={styles.productsSection}>
          <div className={styles.productsSectionHeader}>
            <h4>Featured Products</h4>
            <h2>BEST SELLER PRODUCTS</h2>
            <p>Problems trying to resolve the conflict between</p>
          </div>
          <div className={styles.productsSectionGrid}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <button className={styles.viewAllButton}>Load More Products</button>
        </section>

        {/* Featured Products */}
        <section className={app_styles.featuredProductsSection}>
          <div className={app_styles.featuredProductsSectionHeader}>
            <h4>Featured Products</h4>
            <h2>THE BEST SERVICES</h2>
            <p>Problems trying to resolve the conflict between</p>
          </div>
          <div className={app_styles.featuredProductsSectionGrid}>
            {services.map((service) => (
              <div key={service.id} className={app_styles.featuredProductCard}>
                <img src={service.image} alt={`Product ${service.id}`} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section>
          <div>
            <p>Practise Advice</p>
            <h2>Featured Posts</h2>
          </div>
          <div className={app_styles.featuredPostsSection}>
            <div className={app_styles.postCard}>
              <img src="https://via.placeholder.com/300" alt="Post 1" />
              <h3>Post Title 1</h3>
              <p>Post description goes here.</p>
            </div>
            <div className={app_styles.postCard}>
              <img src="https://via.placeholder.com/300" alt="Post 2" />
              <h3>Post Title 2</h3>
              <p>Post description goes here.</p>
            </div>
            <div className={app_styles.postCard}>
              <img src="https://via.placeholder.com/300" alt="Post 3" />
              <h3>Post Title 3</h3>
              <p>Post description goes here.</p>
            </div>
            <div className={app_styles.postCard}>
              <img src="https://via.placeholder.com/300" alt="Post 4" />
              <h3>Post Title 4</h3>
              <p>Post description goes here.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
