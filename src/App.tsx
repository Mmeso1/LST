import styles from "./components/styles/ProductSection.module.css";
import { items, services, posts } from "./data";
import app_styles from "./App.module.css";
import Navigation from "./components/Navigation";
import MasonryLayout from "./components/MasonryLayout";
import ProductCard from "./components/ProductCard";
import clock from "./assets/clock.svg";
import picture from "./assets/picture.svg";
import arrow from "./assets/arrow-next.svg";

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
        <section className={app_styles.featuredPostsSection}>
          <div className={app_styles.featuredPostsSectionHeader}>
            <p>Practise Advice</p>
            <h2>Featured Posts</h2>
          </div>
          <div className={app_styles.featuredPostsSectionGrid}>
            {posts.map((item) => (
              <div key={item.id} className={app_styles.postCard}>
                <div className={app_styles.postCardTop}>
                  <img src={item.image} alt="Post 1" />
                  <p>NEW</p>
                </div>
                <div className={app_styles.postCardBottom}>
                  <div className={app_styles.postCardStatus}>
                    <p>Google</p>
                    <p>Trending</p>
                    <p>New</p>
                  </div>
                  <h1>Loudest à la Madison #1 (L'integral)</h1>
                  <p className={app_styles.postCardDescription}>
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className={app_styles.postCardInfo}>
                    <div>
                      <img src={clock} alt="time" />
                      <p>22 April 2021</p>
                    </div>
                    <div>
                      <img src={picture} alt="comments" />
                      <p>10 comments</p>
                    </div>
                  </div>
                  <div className={app_styles.postCardLearnMore}>
                    <p>Learn More</p>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
