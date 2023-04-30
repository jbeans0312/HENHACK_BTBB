import React, { useState } from "react";
import {
  Droppable,
  type DroppableProvided,
  type DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { DNDType, DNDTypes } from "src/constants/DNDTypes";

type DepositBankProperties = {
  ind: number;
};

export function DepositBank({ ind }: DepositBankProperties): JSX.Element {
  const [bank, setBank] = useState<string[]>([]);
  return (
    <Droppable
      droppableId={`deposit_bank_${ind}`}
      type={DNDTypes(DNDType.DepositBank)}
    >
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{ backgroundColor: snapshot.isDraggingOver ? "blue" : "gray" }}
        >
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
