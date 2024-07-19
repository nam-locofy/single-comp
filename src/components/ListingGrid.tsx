import { FunctionComponent } from "react";
import styles from "./ListingGrid.module.css";

export type ListingGridType = {
  className?: string;
};

const ListingGrid: FunctionComponent<ListingGridType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.listingGrid, className].join(" ")}>
      <div className={styles.listingItems}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
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
              <img className={styles.starIcon} alt="" src="/star-icon.svg" />
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
                src="/trend-icon@2x.png"
              />
              <a className={styles.priceChart}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-13@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle1}>Urban Loft</div>
              <div className={styles.listingSubtitle1}>c</div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>4.5</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$410</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-2@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle2}>Forestville Cottages</div>
              <div className={styles.listingSubtitle2}>
                Simcoe, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$325</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-3@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle3}>Unionville Lodge</div>
              <div className={styles.listingSubtitle2}>
                Markham, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>4.6</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer3}>
            <div className={styles.pricePerNight3}>
              <div className={styles.price1}>$485</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-4@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle2}>Missisuaga Aistream</div>
              <div className={styles.listingSubtitle2}>
                Missisauga, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>4.8</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$502</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-5@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle5}>Niagara Homes</div>
              <div className={styles.listingSubtitle2}>
                Niagara, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>4.9</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$655</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-61@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle6}>Sunny Estate</div>
              <div className={styles.listingSubtitle2}>
                Barcort, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer3}>
            <div className={styles.pricePerNight3}>
              <div className={styles.price1}>$320</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems7}>
        <img className={styles.imageIcon7} alt="" src="/image-71@2x.png" />
        <div className={styles.superhostTag}>
          <img
            className={styles.superhostIcon}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
        <div className={styles.itemDetails7}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle7}>Lawrence Hills</div>
              <div className={styles.listingSubtitle7}>
                Lawrence, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$350</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-81@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle8}>Simcoe Lake Lodge</div>
              <div className={styles.listingSubtitle2}>
                Simcoe, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$395</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-91@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle2}>Wasaga Beach Home</div>
              <div className={styles.listingSubtitle2}>
                Georgina Bay, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer3}>
            <div className={styles.pricePerNight3}>
              <div className={styles.price1}>$385</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-101@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle10}>Banff Hills</div>
              <div className={styles.listingSubtitle2}>
                Banff, Alberta, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$385</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-113@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle8}>Creemore Canada</div>
              <div className={styles.listingSubtitle2}>
                Creemore, Alberta, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$385</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-121@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle12}>Kawartha Lakes</div>
              <div className={styles.listingSubtitle12}>
                Kawartha, Alberta, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$385</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-131@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle2}>Revelstoke Cabin</div>
              <div className={styles.listingSubtitle2}>
                Revelstoke, Alberta, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$385</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-14@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle2}>Brightwoods Estate</div>
              <div className={styles.listingSubtitle14}>Brightwoods Estate</div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$385</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-15@2x.png" />
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle2}>Brightwoods Estate</div>
              <div className={styles.listingSubtitle14}>Brightwoods Estate</div>
            </div>
            <div className={styles.ratingCont1}>
              <div className={styles.rating1}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price1}>$385</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon-1@2x.png"
              />
              <a className={styles.priceChart1}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingGrid;
