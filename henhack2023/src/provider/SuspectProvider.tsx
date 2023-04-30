/* eslint-disable @typescript-eslint/consistent-type-assertions -- disabled */
/* eslint-disable @typescript-eslint/indent */
import React, { type ReactNode } from "react";
import type { Suspect } from "src/@types/Suspect/Suspect";
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
  const [suspects, setSuspects] = React.useState<Suspect[]>(
    suspectNames.map(
      (eachName: string) =>
        ({ name: eachName, inBank: false, flipped: false } as Suspect)
    )
  );

  const functionalProperties: Pick<
    iSuspectContext,
    "addSuspect" | "placeSuspect" | "removeSuspect" | "updateSuspect"
  > = React.useMemo(
    (): Pick<
      iSuspectContext,
      "addSuspect" | "placeSuspect" | "removeSuspect" | "updateSuspect"
    > => ({
      addSuspect: (to: number, suspect: Suspect) => {
        setSuspects((oldSuspects: Suspect[]) => {
          oldSuspects.splice(to, 0, suspect);
          return oldSuspects;
        });
      },
      placeSuspect: (from: number, to: number) => {
        setSuspects((oldSuspects: Suspect[]) => {
          const suspect = oldSuspects.splice(from, 1)[0];
          oldSuspects.splice(to, 0, suspect);
          return oldSuspects;
        });
      },
      removeSuspect: (index: number) => {
        const foundSuspect = suspects[index];
        setSuspects((oldSuspects: Suspect[]) => {
          return oldSuspects.filter((_, ind) => ind !== index);
        });
        return foundSuspect;
      },
      updateSuspect: (index: number, state: Partial<Suspect>) => {
        console.log("updating ", index, state);
        setSuspects((oldSuspects: Suspect[]) => {
          return oldSuspects.map(
            (eachSuspect: Suspect, eachSuspectIndex: number) => {
              if (eachSuspectIndex === index) {
                return { ...eachSuspect, ...state };
              }
              return { ...eachSuspect };
            }
          );
        });
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
