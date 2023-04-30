import React, { type ReactNode } from "react";
import styles from "src/styles/SuspectPage.module.css";

type SuspectPageProperties = {
  children: ReactNode;
};

export const SuspectPage = ({
  children,
}: SuspectPageProperties): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>{"Suspects"}</div>
      {children}
    </div>
  );
};
