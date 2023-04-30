/* eslint-disable @typescript-eslint/indent */
import React, { type ReactNode } from "react";
import type { iSuspectContext } from "src/@types/context/iSuspectContext";
import { SuspectContext } from "src/context/SuspectContext";

type SuspectProviderProperties = {
  children: ReactNode;
  suspectNames: string[];
};

export const SuspectProvider = ({
  children,
  suspectNames,
}: SuspectProviderProperties): JSX.Element => {
  const [suspects, setSuspects] = React.useState<string[]>(suspectNames);

  const functionalProperties: Pick<
    iSuspectContext,
    "addSuspect" | "placeSuspect" | "removeSuspect"
  > = React.useMemo(
    (): Pick<
      iSuspectContext,
      "addSuspect" | "placeSuspect" | "removeSuspect"
    > => ({
      addSuspect: (to: number, suspect: string) => {
        setSuspects((oldSuspects: string[]) => {
          oldSuspects.splice(to, 0, suspect);
          return oldSuspects;
        });
      },
      placeSuspect: (from: number, to: number) => {
        setSuspects((oldSuspects: string[]) => {
          const suspect = oldSuspects.splice(from, 1)[0];
          oldSuspects.splice(to, 0, suspect);
          return oldSuspects;
        });
      },
      removeSuspect: (index: number) => {
        const foundSuspect = suspects[index];
        setSuspects((oldSuspects: string[]) => {
          return oldSuspects.filter((_, ind) => ind !== index);
        });
        return foundSuspect;
      },
    }),
    [suspects]
  );

  const memoizedContext: iSuspectContext = React.useMemo(
    () => ({ suspects, ...functionalProperties }),
    [functionalProperties, suspects]
  );

  return (
    <SuspectContext.Provider value={memoizedContext}>
      {children}
    </SuspectContext.Provider>
  );
};
