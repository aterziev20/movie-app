import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavMenu() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navMenu} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <div className={styles.leftContainer}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/movies" className={styles.link}>
            Movies
          </Link>
          <Link href="/series" className={styles.link}>
            Series
          </Link>
        </div>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            HBO+
          </Link>
        </div>
        <div className={styles.rightContainer}>
          <Link href="/login" className={styles.link}>
            Log in
          </Link>
          <Link href="/signup" className={styles.link}>
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}
