export type iSuspectContext = {
  addSuspect: (_to: number, suspect: string) => void;
  /**
   *
   * @param _index
   * @returns - The removed suspect
   */
  removeSuspect: (_index: number) => string;
  placeSuspect: (_from: number, _to: number) => void;
  suspects: string[];
};
