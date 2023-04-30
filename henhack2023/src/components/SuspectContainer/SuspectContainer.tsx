import React, { type ReactElement, type ReactNode } from "react";
import {
  Droppable,
  type DroppableProvided,
  type DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { DNDType, DNDTypes } from "src/constants/DNDTypes";

type SuspectContainerProperties = {
  children: ReactNode;
};

export const SuspectContainer = ({
  children,
}: SuspectContainerProperties): JSX.Element => {
  return (
    <>
      <Droppable
        droppableId={"droppable_suspect_container"}
        isDropDisabled={false}
        type={DNDTypes(DNDType.Suspect)}
      >
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: snapshot.isDraggingOver ? "blue" : "gray",
            }}
          >
            {children}
          </div>
        )}
      </Droppable>
    </>
  );
};
