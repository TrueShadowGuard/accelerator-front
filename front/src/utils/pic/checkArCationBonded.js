import {AR_CATION_MAX_DISTANCE, ARYL_AMINO_ACIDS, centerOfAromaticRingOf, distance} from "./common";

export default function checkArCationBonded(firstAminoAtoms, secondAminoAtoms) {
  return check(firstAminoAtoms, secondAminoAtoms) || check(secondAminoAtoms, firstAminoAtoms);

  function check(firstAminoAtoms, secondAminoAtoms) {
    const firstAminoName = firstAminoAtoms[0].aminoAcidName;
    const secondAminoName = secondAminoAtoms[0].aminoAcidName;
    if (!ARYL_AMINO_ACIDS.includes(firstAminoName) || !['LYZ', 'ARG'].includes(secondAminoName)) return false;
    const center = centerOfAromaticRingOf(firstAminoAtoms);
    const nytrogens = secondAminoName === 'LYZ' ?
      secondAminoAtoms.filter(atom => atom.atomName === 'NZ') :
      secondAminoAtoms.filter(atom => ['NH1', 'NH2'].includes(atom.atomName));
    return nytrogens.some(N => {
      const dist = distance(center, N);
      return dist < AR_CATION_MAX_DISTANCE;
    });
  }
}
