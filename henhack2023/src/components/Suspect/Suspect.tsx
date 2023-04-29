import React from "react";
import { Image } from "react-bootstrap";
import styles from "src/styles/Suspect.module.css";

type SuspectProperties = {
  imgPath: string;
  suspectName: string;
};

export const Suspect = ({
  imgPath,
  suspectName,
}: SuspectProperties): JSX.Element => (
  <Image
    alt={`${suspectName}'s picture`}
    className={styles.suspect_img}
    fluid
    id={`suspect_${suspectName}`}
    roundedCircle
    src={imgPath}
  />
);
