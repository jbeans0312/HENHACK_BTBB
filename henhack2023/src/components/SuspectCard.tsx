import React from "react";
import "../styles/SuspectCard.css";
import { Suspect } from "./Suspect/Suspect";

export function SuspectCard({ id }: { id: string }): JSX.Element {
  const suspectName = "suspect_" + id + ".png";

  return (
    <div className="susCardContainer">
      <Suspect imgPath={`../suspect_images/${suspectName}`} suspectName={id} />
    </div>
  );
}
