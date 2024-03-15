import { generateMappedArray } from "../generateMappedArray";

const ageRangedMapped = {
  G_RATED: "L",
  PG_RATED: "até +10",
  PG_13_RATED: "Até + 12",
  R_RATED: "Até + 16",
};

export const ageRangeMappedArray = generateMappedArray(ageRangedMapped);
