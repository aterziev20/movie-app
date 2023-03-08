import Head from "next/head";
import React, { useState, useEffect } from "react";

import MyList from "@/components/MyList";

import TrendingMovies from "@/components/TrendingMovies";
import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";

import TrendingTVShows from "@/components/TrendingTVShows";
import PopularTVShows from "@/components/PopularTVShows";
import TopRatedTVShows from "@/components/TopRatedTVShows";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServerSideProps } from "./api/tmdb";

export default function Home({
  trendingMovies,
  popularMovies,
  topRatedMovies,
  trendingTvShows,
  popularTvShows,
  topRatedTvShows,
}) {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem("myList");
    if (savedList) {
      setMyList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const addToMyList = (movie) => {
    if (!myList.some((m) => m.id === movie.id)) {
      setMyList((prevMyList) => [...prevMyList, movie]);
    }
  };

  const removeFromMyList = (movie) => {
    const updatedList = myList.filter((m) => m.id !== movie.id);
    setMyList(updatedList);
  };

  return (
    <div>
      <Head>
        <title>Movie App</title>
      </Head>
      <Header />
      <main>
        <MyList
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={myList}
        />
        <TrendingMovies
          trendingMovies={trendingMovies}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={myList}
        />
        <PopularMovies
          popularMovies={popularMovies}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={myList}
        />
        <TopRatedMovies
          topRatedMovies={topRatedMovies}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={myList}
        />
        <TrendingTVShows
          trendingTvShows={trendingTvShows}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={myList}
        />
        <PopularTVShows
          popularTvShows={popularTvShows}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={myList}
        />
        <TopRatedTVShows
          topRatedTvShows={topRatedTvShows}
          onAddToMyList={addToMyList}
          onRemoveFromMyList={removeFromMyList}
          myList={myList}
          allMoviesInList={myList}
        />
      </main>
      <Footer />
    </div>
  );
}

export { getServerSideProps };
