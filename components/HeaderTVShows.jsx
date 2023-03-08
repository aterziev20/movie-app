import NavMenu from "./NavMenu";
import styles from "@/styles/HeaderTV.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { FaPlay } from "react-icons/fa";

const HeaderTVShows = () => {
  return (
    <header>
      <NavMenu />
      <div className={styles.background}>
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={`${styles.backgroundSlides} ${styles.slide1}`}>
              <div className={styles.infoWrapper}>
                <div className={styles.text}>
                  <div className={styles.title}>The Last of Us</div>
                  <p className={styles.info}>
                    Find something worth fighting. And dying for. Their journey
                    continues.
                  </p>
                  <div className={styles.buttonWrapper}>
                    <button className={styles.playButton}>
                      <FaPlay />
                    </button>
                    <button className={styles.infoButton}>
                      <span>More Info</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.backgroundSlides} ${styles.slide2}`}>
              <div className={styles.infoWrapper}>
                <div className={styles.title}>The Mandalorian</div>
                <p className={styles.info}>
                  The travels of a lone bounty hunter in the outer reaches of
                  the galaxy, far from the authority of the New Republic.
                </p>
                <div className={styles.buttonWrapper}>
                  <button className={styles.playButton}>
                    <FaPlay />
                  </button>
                  <button className={styles.infoButton}>
                    <span>More Info</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.backgroundSlides} ${styles.slide3}`}>
              <div className={styles.infoWrapper}>
                <div className={styles.title}>Breaking Bad</div>
                <p className={styles.info}>
                  A chemistry teacher diagnosed with inoperable lung cancer
                  turns to manufacturing and selling methamphetamine.
                </p>
                <div className={styles.buttonWrapper}>
                  <button className={styles.playButton}>
                    <FaPlay />
                  </button>
                  <button className={styles.infoButton}>
                    <span>More Info</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
};

export default HeaderTVShows;
