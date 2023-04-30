import React, { type ReactElement, type ReactNode } from "react";
import {
  Droppable,
  type DroppableProvided,
  type DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { DNDType, DNDTypes } from "src/constants/DNDTypes";
import styles from "src/styles/SuspectContainer.module.css";

type SuspectContainerProperties = {
  children: ReactNode;
};

export const SuspectContainer = ({
  children,
}: SuspectContainerProperties): JSX.Element => {
  return (
    <>
      <Droppable
        direction="horizontal"
        droppableId={"droppable_suspect_container"}
        isDropDisabled={false}
        type={DNDTypes(DNDType.Suspect)}
      >
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <>
            <div
              className={styles.container}
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                backgroundColor: "gray",
              }}
            >
              {children}
              {provided.placeholder}
            </div>
          </>
        )}
      </Droppable>
    </>
  );
};
