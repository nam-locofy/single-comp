import { FunctionComponent } from "react";
import styles from "./LogoIcon.module.css";

export type LogoIconType = {
  className?: string;
};

const LogoIcon: FunctionComponent<LogoIconType> = ({ className = "" }) => {
  return (
    <img
      className={[styles.logoIcon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/logo.svg"
    />
  );
};

export default LogoIcon;
