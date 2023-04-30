export const enum DNDType {
  Suspect,
  DepositBank,
}

const DNDTypesArray = ["SUSPECT", "DEPOSITBANK"];

export const DNDTypes = (dndType: DNDType): string =>
  DNDTypesArray[dndType as number];
