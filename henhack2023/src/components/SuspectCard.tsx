import React from "react";
import "../styles/SuspectCard.css";
import { Suspect } from "./Suspect/Suspect";

export function SuspectCard({ id }: { id: string }): JSX.Element {
  const suspectName = "suspect_" + id + ".png";
  console.log(suspectName);

  return (
    <div className="susCardContainer">
      <Suspect
        imgPath={`../suspect_images/${suspectName}`}
        suspectName={suspectName}
      />
    </div>
  );
}
