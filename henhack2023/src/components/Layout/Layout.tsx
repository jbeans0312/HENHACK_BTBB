import React, { type ReactNode } from "react";
import styles from "src/styles/Layout.module.css";

type LayoutProperties = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProperties): JSX.Element => (
  <div className={styles.layout_container}>{children}</div>
);
