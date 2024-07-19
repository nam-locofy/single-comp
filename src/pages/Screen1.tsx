import { FunctionComponent } from "react";
import Page from "../components/Page";
import styles from "./Screen1.module.css";

const Screen1: FunctionComponent = () => {
  return (
    <div className={styles.screen1}>
      <Page />
    </div>
  );
};

export default Screen1;
