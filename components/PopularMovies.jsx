import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Movies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function PopularMovies({
  popularMovies,
  myList,
  onAddToMyList,
  onRemoveFromMyList,
}) {
  const [allMoviesInList, setAllMoviesInList] = useState([]);

  // Set up useEffect to update allMoviesInList every time myList changes
  useEffect(() => {
    const newList = popularMovies.filter((movie) =>
      myList.some((m) => m.id === movie.id)
    );
    setAllMoviesInList(newList);
  }, [myList, popularMovies]);

  const handleAddToMyList = (movie) => {
    const movieIndex = myList.findIndex((m) => m.id === movie.id);
    if (movieIndex >= 0) {
      // Movie already exists in the list, remove it
      const updatedList = [...myList];
      updatedList.splice(movieIndex, 1);
      onRemoveFromMyList(movie);
      setAllMoviesInList(allMoviesInList.filter((m) => m.id !== movie.id));
    } else {
      // Add the movie to the list
      onAddToMyList(movie);
      setAllMoviesInList([...allMoviesInList, movie]);
    }
  };

  const isMovieInMyList = (movie) => {
    return myList.some((m) => m.id === movie.id);
  };

  const buttonChange = (movie) => {
    const isInMyList = isMovieInMyList(movie);
    const isInAllMoviesInList = allMoviesInList.some((m) => m.id === movie.id);
    if (isInMyList && isInAllMoviesInList) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <path d="M9 16.17l-3.59-3.58-1.41 1.41 5 5 12-12-1.41-1.41-10.59 10.58z" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <path d="M19,11H13V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v6H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.6,11,19,11z" />
        </svg>
      );
    }
  };

  return (
    <div className={styles.movieRow}>
      <h1 className={styles.movieType}>Most Popular Movies</h1>
      <div className={styles.movieListContainer}>
        <Swiper
          slidesPerView={6}
          slidesPerGroup={6}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            // when window width is >= 380px
            400: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            // when window width is >= 576px
            576: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            // when window width is >= 1440px
            1440: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          navigation={true}
          className="mySwiper"
        >
          {popularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div>
                <div className={styles.movie}>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                        width={210}
                        height={315}
                        className={styles.movieImage}
                      />
                      <button
                        className={styles.favoriteButton}
                        onClick={() => handleAddToMyList(movie)}
                        title="Add to My List"
                      >
                        {buttonChange(movie)}
                      </button>
                    </div>
                  </div>
                  <div className={styles.movieInfo}>
                    <h2>{movie.title}</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
