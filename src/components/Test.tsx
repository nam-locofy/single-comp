import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Test.module.css";

export type TestType = {
  className?: string;
  iWV0Mg8ZqRrAHdGxGfFE6?: string;
  topTravelAppInSingapore?: string;
  highlyRatedInAppStoreGoog?: string;
  play?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propLeft2?: CSSProperties["left"];
  propWidth1?: CSSProperties["width"];
};

const Test: FunctionComponent<TestType> = ({
  className = "",
  propLeft,
  iWV0Mg8ZqRrAHdGxGfFE6,
  topTravelAppInSingapore,
  propLeft1,
  propWidth,
  propMinWidth,
  propLeft2,
  propWidth1,
  highlyRatedInAppStoreGoog,
  play,
}) => {
  const divmvuw9LEwrJBwE427Nq4fStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const topTravelAppStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propLeft1, propWidth, propMinWidth]);

  const highlyRatedInContainerStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth1,
    };
  }, [propLeft2, propWidth1]);

  return (
    <div
      className={[styles.divmvuw9lewrjbwe427nq4f, className].join(" ")}
      style={divmvuw9LEwrJBwE427Nq4fStyle}
    >
      <img
        className={styles.iwv0mg8zqrrahdgxgffe6Icon}
        loading="lazy"
        alt=""
        src={iWV0Mg8ZqRrAHdGxGfFE6}
      />
      <div className={styles.topTravelApp} style={topTravelAppStyle}>
        {topTravelAppInSingapore}
      </div>
      <div className={styles.div69844tpqowxkdcatb8ob}>
        <div
          className={styles.highlyRatedInContainer}
          style={highlyRatedInContainerStyle}
        >
          <span className={styles.highlyRatedInContainer1}>
            <p className={styles.highlyRatedIn}>{highlyRatedInAppStoreGoog}</p>
            <p className={styles.highlyRatedIn}>{play}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Test;
