import { ARYL_AMINO_ACIDS, centerOfAromaticRingOf, distance } from "./common";

export default function checkArArBonded(firstAminoAtoms, secondAminoAtoms) {
  const firstAminoName = firstAminoAtoms[0].aminoAcidName;
  const secondAminoName = secondAminoAtoms[0].aminoAcidName;
  if (
    !ARYL_AMINO_ACIDS.includes(firstAminoName) ||
    !ARYL_AMINO_ACIDS.includes(secondAminoName)
  )
    return false;
  const firstCenter = centerOfAromaticRingOf(firstAminoAtoms);
  const secondCenter = centerOfAromaticRingOf(secondAminoAtoms);
  if (!firstCenter || !secondCenter) return false;
  return (
    distance(firstCenter, secondCenter) > 3.5 &&
    distance(firstCenter, secondCenter) < 7
  );
}
