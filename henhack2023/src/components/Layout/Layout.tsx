import React, { type ReactNode } from "react";
import styles from "src/styles/Layout.module.css";
import blubackground from "src/blubackground.png";

type LayoutProperties = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProperties): JSX.Element => (
  <div className={styles.layout_container}>{children}</div>
);
