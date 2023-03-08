import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import styles from "../styles/Login.module.css";
import Footer from "@/components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleLogin = (event) => {
    event.preventDefault();
    // code to handle login

    // redirect to home page
    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>Movie App || Log in</title>
      </Head>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          HBO+
        </Link>
      </div>
      <main>
        <div className={styles.container}>
          <form onSubmit={handleLogin} className={styles.form}>
            <h1 className={styles.title}>Log in with your email</h1>
            <p className={styles.text}>
              You will use your email and password to log into your HBO+ account
              to watch your favourite shows and movies.
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
            <button type="submit" className={styles.button}>
              Login
            </button>
            <div className={styles.linksContainer}>
              <div className={styles.linksItem}>
                Forgot your password?
                <a href="" className={styles.link}>
                  Reset Password
                </a>
              </div>
              <div className={styles.linksItem}>
                New to HBO+?
                <a href="/signup" className={styles.link}>
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
