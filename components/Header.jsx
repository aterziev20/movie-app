import NavMenu from "./NavMenu";
import styles from "@/styles/Header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { FaPlay } from "react-icons/fa";

const Header = () => {
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
                <div className={styles.title}>Avatar</div>
                <p className={styles.info}>
                  A paraplegic Marine dispatched to the moon Pandora becomes
                  torn between following his orders and protecting the world he
                  feels is his home.
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
            <div className={`${styles.backgroundSlides} ${styles.slide2}`}>
              <div className={styles.infoWrapper}>
                <div className={styles.title}>Babylon</div>
                <p className={styles.info}>
                  A tale of outsized ambition and outrageous excess, the rise
                  and fall of multiple characters during an era of unbridled
                  decadence and depravity in early Hollywood.
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
                <div className={styles.title}>Creed III</div>
                <p className={styles.info}>
                  Adonis has been thriving in both his career and family life,
                  but when a childhood friend and former boxing prodigy
                  resurfaces, the face-off is more than just a fight.
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

export default Header;
