import { FunctionComponent } from "react";
import styles from "./HelloWorld.module.css";

export type HelloWorldType = {
  className?: string;
  staysNearby?: string;
};

const HelloWorld: FunctionComponent<HelloWorldType> = ({
  className = "",
  staysNearby,
}) => {
  return (
    <div className={[styles.listingsContent, className].join(" ")}>
      <div className={styles.staysNearbyParent}>
        <h3 className={styles.staysNearby}>{staysNearby}</h3>
        <h3 className={styles.torontoOntario}>Toronto Ontario</h3>
      </div>
      <div className={styles.mapContainerParent}>
        <div className={styles.mapContainer}>
          <img
            className={styles.bentoMenu1Icon}
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className={styles.mapItems}>
          <img className={styles.bentoMenu1Icon} alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
