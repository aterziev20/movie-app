import Head from "next/head";
import React, { useState, useEffect } from "react";

import TrendingMovies from "@/components/TrendingMovies";
import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServerSideProps } from "./api/tmdb";

export default function Movies({
  trendingMovies,
  popularMovies,
  topRatedMovies,
}) {
  const [myList, setMyList] = useState([]);
  const [allMoviesInList, setAllMoviesInList] = useState([]);

  useEffect(() => {
    const savedMyList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(savedMyList);
    setAllMoviesInList([...savedMyList]);
  }, []);

  const addToMyList = (movie) => {
    if (!allMoviesInList.some((m) => m.id === movie.id)) {
      setMyList((prevMyList) => [...prevMyList, movie]);
      setAllMoviesInList((prevList) => [...prevList, movie]);
      localStorage.setItem(
        "myList",
        JSON.stringify([...allMoviesInList, movie])
      );
    }
  };

  const removeFromMyList = (movie) => {
    const updatedList = myList.filter((m) => m.id !== movie.id);
    setMyList(updatedList);
    setAllMoviesInList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  return (
    <div>
      <Head>
        <title>Movie App || Movies</title>
      </Head>
      <Header />
      <main>
        <TrendingMovies
          trendingMovies={trendingMovies}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={allMoviesInList}
        />
        <PopularMovies
          popularMovies={popularMovies}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={allMoviesInList}
        />
        <TopRatedMovies
          topRatedMovies={topRatedMovies}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={allMoviesInList}
        />
      </main>
      <Footer />
    </div>
  );
}

export { getServerSideProps };
