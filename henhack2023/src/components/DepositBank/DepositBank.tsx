import React, { useState } from "react";
import {
  type DropResult,
  Droppable,
  type DroppableProvided,
  type DroppableStateSnapshot,
  DragDropContext,
} from "react-beautiful-dnd";
import { DNDType, DNDTypes } from "src/constants/DNDTypes";

import styles from "src/styles/DepositBank.module.css";

type DepositBankProperties = {
  ind: number;
};

export function DepositBank({ ind }: DepositBankProperties): JSX.Element {
  const [bank, setBank] = useState<string[]>([]);

  const onDragEnd = React.useCallback((result: DropResult): void => {
    console.log("drag end");
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.bank_title}>{`Bank ${ind + 1}`}</div>
      <Droppable
        droppableId={`deposit_bank_${ind}`}
        type={DNDTypes(DNDType.DepositBank)}
      >
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
            className={styles.bank}
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: snapshot.isDraggingOver
                ? "rgba(128, 128, 128, .75)"
                : "black",
            }}
          >
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
