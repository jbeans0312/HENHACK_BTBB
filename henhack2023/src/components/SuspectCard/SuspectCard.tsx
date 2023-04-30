import React from "react";
import styles from "src/styles/SuspectCard.module.css";
import { Image } from "react-bootstrap";
import {
  Draggable,
  type DraggableProvided,
  type DraggableStateSnapshot,
} from "react-beautiful-dnd";

type SuspectCardProperties = {
  id: string;
  index: number;
};

export function SuspectCard({ id, index }: SuspectCardProperties): JSX.Element {
  const suspectName = "suspect_" + id + ".png";

  return (
    <Draggable draggableId={`draggable_suspect_${index}`} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          className={styles.suspect_card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Image
            alt={`${suspectName}'s picture`}
            className={styles.suspect_img}
            fluid
            id={`suspect_${suspectName}`}
            roundedCircle
            src={suspectName}
          />
        </div>
      )}
    </Draggable>
  );
}
