import Head from "next/head";
import React, { useState, useEffect } from "react";

import TrendingTVShows from "@/components/TrendingTVShows";
import PopularTVShows from "@/components/PopularTVShows";
import TopRatedTVShows from "@/components/TopRatedTVShows";

import HeaderTVShows from "@/components/HeaderTVShows";
import Footer from "@/components/Footer";
import { getServerSideProps } from "./api/tmdb";

export default function Series({
  trendingTvShows,
  popularTvShows,
  topRatedTvShows,
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
        <title>Movie App || Shows</title>
      </Head>
      <HeaderTVShows />
      <main>
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
