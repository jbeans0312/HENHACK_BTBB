export const enum DNDType {
  Suspect,
}

const DNDTypesArray = ["SUSPECT"];

export const DNDTypes = (dndType: DNDType): string =>
  DNDTypesArray[dndType as number];
