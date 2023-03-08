import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // code to handle sign-up
    // redirect to home page
    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>Movie App || Sign up</title>
      </Head>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          HBO+
        </Link>
      </div>
      <main>
        <div className={styles.container}>
          <form onSubmit={handleSignup} className={styles.form}>
            <h1 className={styles.title}>Sign up for HBO+</h1>
            <p className={styles.text}>
              Create your HBO+ account to watch your favourite shows and movies.
            </p>
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="Email address"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Password"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              Sign up
            </button>
            <div className={styles.linksContainer}>
              <div className={styles.linksItem}>
                Already have an account?
                <Link href="/login" className={styles.link}>
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
