const { HYDROPHOBIC_MAX_DISTANCE } = require("./common");
const { HYDROPHOBIC_NON_ACCEPTABLE_CARBONS } = require("./common");
const { HYDROPHOBIC_AMINO_ACIDS } = require("./common");
const { distance } = require("./common");

export default function checkHydrophobicBonded(
  firstAminoAtoms,
  secondAminoAtoms
) {
  const firstAminoName = firstAminoAtoms[0].aminoAcidName;
  const secondAminoName = secondAminoAtoms[0].aminoAcidName;

  if (
    !(
      HYDROPHOBIC_AMINO_ACIDS.includes(firstAminoName) &&
      HYDROPHOBIC_AMINO_ACIDS.includes(secondAminoName)
    )
  )
    return false;

  firstAminoAtoms = firstAminoAtoms.filter(
    (atom) =>
      atom.atomName.startsWith("C") &&
      !HYDROPHOBIC_NON_ACCEPTABLE_CARBONS.includes(atom.atomName)
  );
  secondAminoAtoms = secondAminoAtoms.filter(
    (atom) =>
      atom.atomName.startsWith("C") &&
      !HYDROPHOBIC_NON_ACCEPTABLE_CARBONS.includes(atom.atomName)
  );

  for (let i = 0; i < firstAminoAtoms.length; i++) {
    for (let j = 0; j < secondAminoAtoms.length; j++) {
      if (
        distance(firstAminoAtoms[i], secondAminoAtoms[j]) <=
        HYDROPHOBIC_MAX_DISTANCE
      ) {
        return true;
      }
    }
  }
}
