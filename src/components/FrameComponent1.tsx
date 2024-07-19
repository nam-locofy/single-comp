import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.footerContentParent, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <div className={styles.linksContainer}>
            <div className={styles.supportParent}>
              <h3 className={styles.support}>Support</h3>
              <div className={styles.helpCentre}>Help Centre</div>
              <div className={styles.aircover}>AirCover</div>
              <div className={styles.combatingDiscrimination}>
                Combating discrimination
              </div>
              <div className={styles.combatingDiscrimination}>
                Supporting people with disabilities
              </div>
              <div className={styles.combatingDiscrimination}>
                Cencellation options
              </div>
              <div className={styles.combatingDiscrimination}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.supportParent}>
              <h3 className={styles.hosting}>Hosting</h3>
              <div className={styles.localHome}>Local home</div>
              <div className={styles.coverForHosts}>Cover for hosts</div>
              <div className={styles.combatingDiscrimination}>
                Hosting resources
              </div>
              <div className={styles.communityForum}>Community forum</div>
              <div className={styles.combatingDiscrimination}>
                Hosting responsibly
              </div>
            </div>
            <div className={styles.supportParent}>
              <h3 className={styles.localhost}>Localhost</h3>
              <div className={styles.newsroom}>Newsroom</div>
              <div className={styles.newFeatures}>New Features</div>
              <a className={styles.careers}>Careers</a>
              <div className={styles.investres}>Investres</div>
              <a className={styles.giftCards}>Gift cards</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerRightContent}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent1;
