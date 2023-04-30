/* eslint-disable @typescript-eslint/indent -- disabled */
import React from "react";
import type { iSuspectContext } from "src/@types/context/iSuspectContext";

export const SuspectContext: React.Context<iSuspectContext | undefined> =
  React.createContext<iSuspectContext | undefined>(undefined);
