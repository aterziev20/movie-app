import React from "react";
import Image from "next/image";
import styles from "@/styles/Movies.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function MyList({ myList, onRemoveFromMyList }) {
  const handleRemoveFromMyList = (content) => {
    onRemoveFromMyList(content);
  };

  return (
    <div className={styles.movieRow}>
      {myList.length > 0 && <h1 className={styles.movieTitle}>My List</h1>}
      <div className={styles.movieListContainer}>
      <Swiper
          slidesPerView={6}
          slidesPerGroup={6}
          navigation={true}
          className="mySwiper"
        >
          {myList &&
            myList.map((content) => (
              <SwiperSlide key={content.id}>
                <div>
                  <div className={styles.movie}>
                    <div className={styles.imageContainer}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={`https://image.tmdb.org/t/p/w300${content.poster_path}`}
                          alt={`${content.title} poster`}
                          width={210}
                          height={315}
                          className={styles.movieImage}
                        />
                        <button
                          className={styles.favoriteButton}
                          onClick={() => handleRemoveFromMyList(content)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="black"
                            width="24px"
                            height="24px"
                          >
                            <path d="M9 16.17l-3.59-3.58-1.41 1.41 5 5 12-12-1.41-1.41-10.59 10.58z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className={styles.movieInfo}>
                      <h2>
                        {content.title || content.name || "Unknown title"}
                      </h2>
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
