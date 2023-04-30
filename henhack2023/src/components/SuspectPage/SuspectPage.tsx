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
      <div className={styles.banks}>
        {new Array(depositBanks).fill(0).map(
          (eachDepositBank: number): JSX.Element => (
            <div
              className={styles.bank}
              key={`deposit_bank_elem_${eachDepositBank}`}
            >
              <DepositBank ind={eachDepositBank} />
            </div>
          )
        )}
      </div>
      {children}
    </div>
  );
};
