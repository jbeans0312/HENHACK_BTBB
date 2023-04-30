/* eslint-disable @typescript-eslint/no-confusing-void-expression -- disabled */
import React, { useState } from "react";
import {
  type DropResult,
  Droppable,
  type DroppableProvided,
  type DroppableStateSnapshot,
  DragDropContext,
} from "react-beautiful-dnd";
import { DNDType, DNDTypes } from "src/constants/DNDTypes";
import { useSuspectContext } from "src/hooks/useSuspectContext";

import styles from "src/styles/DepositBank.module.css";
import { SuspectCard } from "../SuspectCard";
import type { Suspect } from "src/@types/Suspect/Suspect";

type DepositBankProperties = {
  bank: Suspect[];
  ind: number;
};

export function DepositBank({ bank, ind }: DepositBankProperties): JSX.Element {
  return (
    <>
      <div className={styles.bank_title}>{`Bank ${ind + 1}`}</div>
      <Droppable
        direction="horizontal"
        droppableId={`deposit_bank_${ind}`}
        type={DNDTypes(DNDType.Suspect)}
      >
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
            className={styles.bank}
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: snapshot.isDraggingOver
                ? "rgba(128, 128, 128, .25)"
                : "black",
            }}
          >
            {bank
              .filter((e) => Boolean(e))
              .map((eachSuspect: Suspect, eachSuspectIndex: number) => (
                <SuspectCard
                  id={eachSuspect.name}
                  key={`bank_suspect_key_${eachSuspect.name}`}
                  index={eachSuspectIndex}
                  flipped={eachSuspect.flipped}
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
}
