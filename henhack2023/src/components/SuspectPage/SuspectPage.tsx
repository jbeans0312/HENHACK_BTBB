import React, { type ReactNode } from "react";
import styles from "src/styles/SuspectPage.module.css";
import { DepositBank } from "../DepositBank/DepositBank";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";

type SuspectPageProperties = {
  children: ReactNode;
  depositBanks?: number;
};

export const SuspectPage = ({
  children,
  depositBanks,
}: SuspectPageProperties): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>{"Suspects"}</div>
      {children}
    </div>
  );
};
