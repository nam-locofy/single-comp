import { FunctionComponent } from "react";
import styles from "./ImageIcon.module.css";

export type ImageIconType = {
  className?: string;
};

const ImageIcon: FunctionComponent<ImageIconType> = ({ className = "" }) => {
  return (
    <img
      className={[styles.imageIcon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/image1@2x.png"
    />
  );
};

export default ImageIcon;
