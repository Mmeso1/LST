import { useState } from "react";
import styles from "./styles/Navigation.module.css";
import hamburger from "../assets/hamburger-nav.svg";
import search from "../assets/search-nav.svg";
import cart from "../assets/cart-nav.svg";
import arrow from "../assets/arrow-down.svg";
import user from "../assets/user.svg";
import blueCart from "../assets/blue-cart.svg";
import blueLike from "../assets/blue-heart.svg";
import blueSearch from "../assets/blue-search.svg";
import phone from "../assets/phone-icon.svg";
import email from "../assets/email-icon.svg";
import instagram from "../assets/ig-icon.svg";
import facebook from "../assets/fb-icon.svg";
import youtube from "../assets/yt-icon.svg";
import x from "../assets/x-icon.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navigation}>
      {/* Desktop Contact Bar */}
      <div className={styles.contactBar}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <img src={phone} alt="Phone" />
            <p>(225) 555-0118</p>
          </div>
          <div className={styles.contactItem}>
            <img src={email} alt="Email" />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div>
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className={styles.socialLinks}>
          <p>Follow Us:</p>
          <a href="#" aria-label="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={youtube} alt="Youtube" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src={x} alt="X" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <div className={styles.navBrand}>
          <h1>Bandage</h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Desktop Navigation Links */}
          <div className={styles.desktopNavLinks}>
            <a href="/">Home</a>
            <a href="/">
              Shop{" "}
              <span>
                <img src={arrow} alt="Arrow" />
              </span>
            </a>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Contact</a>
            <a href="/">Pages</a>
          </div>

          <div className={styles.navCTA}>
            <div>
              <span className={styles.authText}>
                <img src={user} alt="user" style={{ paddingRight: "0.5rem" }} />
                <a href="/" className={styles.authText}>
                  Login
                </a>
              </span>
              <span className={styles.slash}>/</span>
              <span>
                <a href="/" className={styles.authText}>
                  Register
                </a>
              </span>
            </div>
            <button className={styles.iconButton}>
              <img src={blueSearch} alt="Search" />
            </button>
            <button className={styles.iconButton}>
              <img src={blueCart} alt="Cart" />
              <span className={styles.blueText}>1</span>
            </button>
            <button className={styles.iconButton}>
              <img src={blueLike} alt="like" />
              <span className={styles.blueText}>1</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Actions */}
        <div className={styles.navActions}>
          <button className={styles.iconButton}>
            <img src={search} alt="Search" />
          </button>
          <button className={styles.iconButton}>
            <img src={cart} alt="Cart" />
          </button>
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src={hamburger} alt="Hamburger menu" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${styles.mobileNavLinks} ${
          isMenuOpen ? styles.active : ""
        }`}
      >
        <a href="/">Home</a>
        <a href="/">Product</a>
        <a href="/">Pricing</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
