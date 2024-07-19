import { FunctionComponent } from "react";
import ImageIcon from "./ImageIcon";
import styles from "./Page.module.css";

export type PageType = {
  className?: string;
};

const Page: FunctionComponent<PageType> = ({ className = "" }) => {
  return (
    <section className={[styles.page, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.comp1}>
          <ImageIcon />
          <div className={styles.itemDetails}>
            <div className={styles.listingInfo}>
              <div className={styles.listingCont}>
                <div className={styles.listingTitle}>Brightwoods Cabin</div>
                <div className={styles.listingSubtitle}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <div className={styles.ratingCont}>
                <div className={styles.rating}>4.9</div>
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.pricePerNight}>
                <div className={styles.price}>$658</div>
                <div className={styles.night}>/night</div>
              </div>
              <div className={styles.bestTime}>
                <img
                  className={styles.trendIcon}
                  loading="lazy"
                  alt=""
                  src="/trend-icon1@2x.png"
                />
                <a className={styles.priceChart}>Price chart</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comp1}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image2@2x.png"
          />
          <div className={styles.itemDetails}>
            <div className={styles.listingInfo}>
              <div className={styles.listingCont}>
                <div className={styles.listingTitle1}>Urban Loft</div>
                <div className={styles.listingSubtitle1}>c</div>
              </div>
              <div className={styles.ratingCont}>
                <div className={styles.rating}>4.5</div>
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.bottomContainer1}>
              <div className={styles.pricePerNight1}>
                <div className={styles.price}>$410</div>
                <div className={styles.night}>/night</div>
              </div>
              <div className={styles.bestTime}>
                <img
                  className={styles.trendIcon}
                  loading="lazy"
                  alt=""
                  src="/trend-icon1@2x.png"
                />
                <a className={styles.priceChart}>Price chart</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comp1}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image3@2x.png"
          />
          <div className={styles.itemDetails}>
            <div className={styles.listingInfo}>
              <div className={styles.listingCont}>
                <div className={styles.listingTitle2}>Forestville Cottages</div>
                <div className={styles.listingSubtitle}>
                  Simcoe, Ontario Canada
                </div>
              </div>
              <div className={styles.ratingCont}>
                <div className={styles.rating}>5.0</div>
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.bottomContainer1}>
              <div className={styles.pricePerNight1}>
                <div className={styles.price}>$325</div>
                <div className={styles.night}>/night</div>
              </div>
              <div className={styles.bestTime}>
                <img
                  className={styles.trendIcon}
                  loading="lazy"
                  alt=""
                  src="/trend-icon1@2x.png"
                />
                <a className={styles.priceChart}>Price chart</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comp1}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image4@2x.png"
          />
          <div className={styles.itemDetails}>
            <div className={styles.listingInfo}>
              <div className={styles.listingCont}>
                <div className={styles.listingTitle3}>Unionville Lodge</div>
                <div className={styles.listingSubtitle}>
                  Markham, Ontario Canada
                </div>
              </div>
              <div className={styles.ratingCont}>
                <div className={styles.rating}>4.6</div>
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.pricePerNight}>
                <div className={styles.price}>$485</div>
                <div className={styles.night}>/night</div>
              </div>
              <div className={styles.bestTime}>
                <img
                  className={styles.trendIcon}
                  loading="lazy"
                  alt=""
                  src="/trend-icon1@2x.png"
                />
                <a className={styles.priceChart}>Price chart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
