/* eslint-disable @typescript-eslint/no-non-null-assertion -- disabled */
import React, { type ReactElement, type ReactNode } from "react";
import {
  type DropResult,
  Droppable,
  type DroppableProvided,
  type DroppableStateSnapshot,
  DragDropContext,
} from "react-beautiful-dnd";
import { DNDType, DNDTypes } from "src/constants/DNDTypes";
import { useSuspectContext } from "src/hooks/useSuspectContext";
import styles from "src/styles/SuspectContainer.module.css";
import { SuspectCard } from "../SuspectCard";
import { DepositBank } from "../DepositBank/DepositBank";
import { BankContainer } from "../DepositBank/BankContainer";
import FadeIn from "react-fade-in";

type SuspectContainerProperties = {
  depositBanks: number;
};

export const SuspectContainer = ({
  depositBanks,
}: SuspectContainerProperties): JSX.Element => {
  const { addSuspect, suspects, placeSuspect, removeSuspect } =
    useSuspectContext();
  const [banks, setBanks] = React.useState<string[][]>(
    new Array(depositBanks).fill(new Array(depositBanks).fill(""))
  );

  const onDragEnd = React.useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      console.log(destination, source);
      if (
        destination?.droppableId === source.droppableId &&
        source.droppableId === "droppable_suspect_container"
      ) {
        placeSuspect(source.index, destination.index);
      } else if (
        (destination?.droppableId.includes("deposit_bank") ?? false) &&
        source.droppableId === "droppable_suspect_container" &&
        Boolean(destination)
      ) {
        const bankIndex = +destination!.droppableId.split("_").slice(-1)[0];
        const removedSuspect = removeSuspect(source.index);
        setBanks((allBanks: string[][]) => {
          return allBanks.map((eachBank: string[], eachBankIndex: number) => {
            if (eachBankIndex === bankIndex) {
              // found bank
              return [...eachBank, removedSuspect];
            }
            return eachBank;
          });
        });
      } else if (
        Boolean(destination) &&
        destination!.droppableId === "droppable_suspect_container" &&
        source.droppableId.includes("deposit_bank")
      ) {
        const bankIndex = +source.droppableId.split("_").slice(-1)[0];
        const foundSuspect = banks[bankIndex][source.index];
        addSuspect(destination!.index, foundSuspect);
        setBanks((allBanks: string[][]) => {
          return allBanks.map((eachBank: string[], eachBankIndex: number) => {
            if (eachBankIndex === bankIndex) {
              eachBank.splice(source.index, 1);
              return eachBank;
            }
            return eachBank;
          });
        });
      }
    },
    [addSuspect, banks, placeSuspect, removeSuspect]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <div className={styles.title}>
          <FadeIn className={styles.title_text}>
            <div>{"First job"}</div>
          </FadeIn>
          <FadeIn
            className={styles.title_text}
            delay={400}
            transitionDuration={700}
          >
            <div className={styles.title_text}>
              {"Choose 3 suspects from the list to eliminate"}
            </div>
          </FadeIn>
        </div>
        <div className={styles.bank_list_container}>
          <div className={styles.banks}>
            <BankContainer banks={banks} numBanks={depositBanks} />
          </div>
          <Droppable
            direction="horizontal"
            droppableId={"droppable_suspect_container"}
            type={DNDTypes(DNDType.Suspect)}
          >
            {(
              provided: DroppableProvided,
              snapshot: DroppableStateSnapshot
            ) => (
              <>
                <div
                  className={styles.suspect_container}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    backgroundColor: snapshot.isDraggingOver
                      ? "rgba(128, 128, 128, 0.25)"
                      : "black",
                  }}
                >
                  {suspects.map((eachSuspectName: string, index: number) => (
                    <SuspectCard
                      key={`suspect_${index}_${eachSuspectName}`}
                      id={eachSuspectName}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              </>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};
