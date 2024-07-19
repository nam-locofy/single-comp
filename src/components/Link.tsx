import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Link.module.css";

export type LinkType = {
  className?: string;
  discoverTheOtherworldlyMa?: string;
  dolphinsAtAtlantisDubai?: string;
  image1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const Link: FunctionComponent<LinkType> = ({
  className = "",
  propLeft,
  propWidth,
  discoverTheOtherworldlyMa,
  dolphinsAtAtlantisDubai,
  image1,
}) => {
  const linkStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const discoverTheOtherworldlyContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.link, className].join(" ")} style={linkStyle}>
      <div className={styles.divvvgoqthswwhooc12zj0o}>
        <div className={styles.divjlfqgusc2tptzb7suxkw}>
          <div
            className={styles.discoverTheOtherworldlyContainer}
            style={discoverTheOtherworldlyContainerStyle}
          >
            <span className={styles.discoverTheOtherworldlyContainer1}>
              <p className={styles.discoverTheOtherworldly}>
                {discoverTheOtherworldlyMa}
              </p>
              <p className={styles.discoverTheOtherworldly}>
                {dolphinsAtAtlantisDubai}
              </p>
            </span>
          </div>
        </div>
        <div className={styles.divydnhlgdjhAb9xpvwl2u}>
          <img
            className={styles.wegoIconpng}
            alt=""
            src="/wegoiconpng@2x.png"
          />
          <div className={styles.wegoTravelBlog}>Wego Travel Blog</div>
        </div>
      </div>
      <img className={styles.image1Icon} loading="lazy" alt="" src={image1} />
    </div>
  );
};

export default Link;
