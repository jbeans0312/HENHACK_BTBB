import type { Suspect } from "../Suspect/Suspect";

export type iSuspectContext = {
  addSuspect: (_to: number, suspect: Suspect) => void;
  /**
   *
   * @param _index
   * @returns - The removed suspect
   */
  removeSuspect: (_index: number) => Suspect;
  placeSuspect: (_from: number, _to: number) => void;
  suspects: Suspect[];
  updateSuspect: (_index: number, state: Partial<Suspect>) => void;
};
