import { FunctionComponent } from "react";
import AppHeaderOld from "../components/AppHeaderOld";
import FrameComponent from "../components/FrameComponent";
import HelloWorld from "../components/HelloWorld";
import ListingGrid from "../components/ListingGrid";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.tagheader}>
        <AppHeaderOld />
        <FrameComponent />
      </div>
      <main className={styles.listingsContentParent}>
        <HelloWorld staysNearby="testaavvvaa" />
        <ListingGrid />
        <button className={styles.searchFlightsButton}>
          <a className={styles.button}>Show more</a>
        </button>
      </main>
      <FrameComponent1 />
    </div>
  );
};

export default Homepage;
