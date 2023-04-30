import React from "react";
import { DepositBank } from "../DepositBank";

type BankContainerProperties = {
  banks: string[][];
  numBanks: number;
};

export const BankContainer = ({
  banks,
  numBanks,
}: BankContainerProperties): JSX.Element => {
  return (
    <>
      {new Array(numBanks).fill(0).map((_, bankInd) => (
        <DepositBank
          bank={banks[bankInd]}
          key={`bank_deposit_banks_${bankInd}`}
          ind={bankInd}
        />
      ))}
    </>
  );
};
