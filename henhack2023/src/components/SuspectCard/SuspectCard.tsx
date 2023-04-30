import React from "react";
import styles from "src/styles/SuspectCard.module.css";
import { Image } from "react-bootstrap";
import {
  Draggable,
  type DraggableProvided,
  type DraggableStateSnapshot,
} from "react-beautiful-dnd";
import ReactCardFlip from "react-card-flip";
import useSound from "use-sound";
import { useSuspectContext } from "src/hooks/useSuspectContext";

type SuspectCardProperties = {
  id: string;
  index: number;
  flipped?: boolean;
};

export function SuspectCard({
  id,
  index,
  flipped,
}: SuspectCardProperties): JSX.Element {
  const { updateSuspect } = useSuspectContext();
  const suspectImageLink = "suspect_" + id + ".png";
  const [flipCard, setFlipCard] = React.useState<boolean>(flipped ?? false);
  const [playFlipCardSound] = useSound(
    `${process.env.PUBLIC_URL}/cardflip.mp3`
  );

  return (
    <Draggable draggableId={`draggable_suspect_${index}`} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          className={styles.suspect_card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ReactCardFlip isFlipped={flipCard} flipDirection="horizontal">
            <div
              className={styles.suspect_img_question}
              onClick={(): void => {
                playFlipCardSound();
                setFlipCard(true);
                updateSuspect(index, { flipped: true });
              }}
            >
              <i className="fa-solid fa-question fa-xl fa-bounce" />
            </div>
            <Image
              alt={`${suspectImageLink}'s picture`}
              className={styles.suspect_img}
              fluid
              id={`suspect_${suspectImageLink}`}
              onClick={(): void => {
                playFlipCardSound();
                setFlipCard(false);
                updateSuspect(index, { flipped: false });
              }}
              roundedCircle
              src={suspectImageLink}
            />
          </ReactCardFlip>
        </div>
      )}
    </Draggable>
  );
}
