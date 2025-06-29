import styles from "./components/styles/ProductSection.module.css";
import { items, services, posts, galleryImages } from "./data";
import ProductsList from "./components/ProductsList";
import app_styles from "./App.module.css";
import Navigation from "./components/Navigation";
import MasonryLayout from "./components/MasonryLayout";
import clock from "./assets/clock.svg";
import picture from "./assets/picture.svg";
import arrow from "./assets/arrow-next.svg";
import user from "./assets/user-pfp.svg";
import stars from "./assets/stars.svg";
import fb from "./assets/b-facebook.svg";
import insta from "./assets/b-instagram.svg";
import twitter from "./assets/b-twitter.svg";
import { useDispatch } from "react-redux";
import { increaseLimit } from "./slices/productsSlice";

function App() {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(increaseLimit());
  };

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
            <ProductsList />
          </div>
          <button className={styles.viewAllButton} onClick={handleLoadMore}>
            Load More Products
          </button>
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
          <div className={app_styles.container}>
            <div className={app_styles.featuredPostsSectionHeader}>
              <p>Practise Advice</p>
              <h2>Featured Posts</h2>
              <h2>Featured Products</h2>
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
                      We focus on ergonomics and meeting you where you work.
                      It's only a keystroke away.
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
          </div>
        </section>

        {/* About Us */}
        <section className={app_styles.aboutUsSection}>
          <div className={app_styles.container}>
            <div className={app_styles.aboutUsInner}>
              <div className={app_styles.aboutUsLeft}>
                <h3>What they say about us</h3>
                <div className={app_styles.aboutUsContent}>
                  <div className={app_styles.profile}>
                    <img src={user} alt="user pic" />
                    <img
                      src={stars}
                      alt="stars pic"
                      className={app_styles.stars}
                    />
                  </div>
                  <p className={app_styles.aboutUsText}>
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                  </p>
                  <div className={app_styles.profileInfo}>
                    <p>Regina Miles</p>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              <div className={app_styles.galleryGrid}>
                {galleryImages.map((img) => (
                  <img
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    className={app_styles.galleryImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Better Experience */}
        <section className={app_styles.betterExperienceSection}>
          <div className={app_styles.contentContainer}>
            <p className={app_styles.text1}>Designing Better Experience</p>
            <h2>Problems trying to resolve the conflict between </h2>
            <p className={app_styles.text2}>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </p>
            <h3 className={app_styles.price}>$16.48</h3>
            <button>ADD YOUR CALL TO ACTION</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={app_styles.footer}>
        <div className={app_styles.footerTop}>
          <div className={app_styles.footerContainer}>
            <div className={app_styles.footerTopContent}>
              <h3>Bandage</h3>
              <div className={app_styles.footerSocialIcons}>
                <img src={fb} alt="facebook icon" />
                <img src={insta} alt="instagram icon" />
                <img src={twitter} alt="twitter icon" />
              </div>
            </div>
            <span className={app_styles.footerTopBorder}></span>
          </div>
        </div>
        <div className={app_styles.footerContainer}>
          <div className={app_styles.footerContent}>
            <div className={app_styles.footerLinks}>
              <h5>Company Info</h5>
              <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={app_styles.footerLinks}>
              <h5>Legal</h5>
              <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={app_styles.footerLinks}>
              <h5>Features</h5>
              <ul>
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div className={app_styles.footerLinks}>
              <h5>Resources</h5>
              <ul>
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
            <div className={app_styles.footerNewsletter}>
              <h5>Get In Touch</h5>
              <div className={app_styles.footerNewsletterForm}>
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
              <p>Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
        <div className={app_styles.footerBottom}>
          <div className={app_styles.footerContainer}>
            <p> Made With Love By Finland All Right Reserved </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
