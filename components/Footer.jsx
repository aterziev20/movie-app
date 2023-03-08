import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerLinks}>
        <Link href="#" className={styles.link}>
          Privacy
        </Link>
        <Link href="#" className={styles.link}>
          Help
        </Link>
        <Link href="#" className={styles.link}>
          Terms
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
