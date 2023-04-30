import React from "react";
import type { iSuspectContext } from "src/@types/context/iSuspectContext";
import { SuspectContext } from "src/context/SuspectContext";

export const useSuspectContext = (): iSuspectContext => {
  const value = React.useContext(SuspectContext);

  if (value === undefined) {
    throw new Error(
      "Must use context from a child component of SuspectContext.Provider"
    );
  }

  return value;
};
