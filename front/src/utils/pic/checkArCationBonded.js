import {
  AR_CATION_MAX_DISTANCE,
  ARYL_AMINO_ACIDS,
  centerOfAromaticRingOf,
  distance,
} from "./common";

export default function checkArCationBonded(firstAminoAtoms, secondAminoAtoms) {
  return (
    check(firstAminoAtoms, secondAminoAtoms) ||
    check(secondAminoAtoms, firstAminoAtoms)
  );

  function check(firstAminoAtoms, secondAminoAtoms) {
    const firstAminoName = firstAminoAtoms[0].aminoAcidName;
    const secondAminoName = secondAminoAtoms[0].aminoAcidName;
    if (
      !ARYL_AMINO_ACIDS.includes(firstAminoName) ||
      !["LYS", "ARG"].includes(secondAminoName)
    ) {
      return false;
    }
    if (
      firstAminoAtoms[0].aminoAcidId === "50" &&
      secondAminoAtoms[0].aminoAcidId === "45"
    )
      debugger;

    const center = centerOfAromaticRingOf(firstAminoAtoms);
    if (!center) return false;

    const nytrogens =
      secondAminoName === "LYS"
        ? secondAminoAtoms.filter((atom) => atom.atomName === "NZ")
        : secondAminoAtoms.filter((atom) =>
            ["NH1", "NH2", "NE"].includes(atom.atomName)
          );
    return nytrogens.some((N) => {
      const dist = distance(center, N);
      return dist < AR_CATION_MAX_DISTANCE;
    });
  }
}
