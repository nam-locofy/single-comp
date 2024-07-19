import { FunctionComponent } from "react";
import LogoIcon from "./LogoIcon";
import styles from "./AppHeaderOld.module.css";

export type AppHeaderOldType = {
  className?: string;
};

const AppHeaderOld: FunctionComponent<AppHeaderOldType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.appHeaderOld, className].join(" ")}>
      <div className={styles.headerContent}>
        <LogoIcon />
        <div className={styles.navLinks}>
          <a className={styles.stays}>Stays</a>
          <a className={styles.becomeAHost}>Become a host</a>
        </div>
        <div className={styles.loginSection}>
          <img
            className={styles.alertsIcon}
            loading="lazy"
            alt=""
            src="/alerts.svg"
          />
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeaderOld;
