import React from "react";
import "../styles/SuspectCard.css";
import { Suspect } from "./Suspect/Suspect";
import { useDrag } from "react-dnd";

export function SuspectCard({ id }: { id: string }): JSX.Element {
  const suspectName = "suspect_" + id + ".png";

  return (
    <div className="susCardContainer">
      <Suspect
        imgPath={`${process.env.PUBLIC_URL}/${suspectName}`}
        suspectName={id}
      />
    </div>
  );
}
