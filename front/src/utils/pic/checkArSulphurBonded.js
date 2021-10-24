import {AR_SULPHUR_MAX_DISTANCE, ARYL_AMINO_ACIDS, centerOfAromaticRingOf, distance} from "./common";

export default function checkArSulphurBonded(firstAminoAtoms, secondAminoAtoms) {
  return check(firstAminoAtoms, secondAminoAtoms) || check(secondAminoAtoms, firstAminoAtoms);

  function check(firstAminoAtoms, secondAminoAtoms) {
    const firstAminoName = firstAminoAtoms[0].aminoAcidName;
    const secondAminoName = secondAminoAtoms[0].aminoAcidName;
    if (!ARYL_AMINO_ACIDS.includes(firstAminoName) || !['CYS', 'MET'].includes(secondAminoName)) return false;
    const center = centerOfAromaticRingOf(firstAminoAtoms);
    const sulphurs = secondAminoName === 'CYS' ?
      secondAminoAtoms.filter(atom => atom.atomName === 'SG') :
      secondAminoAtoms.filter(atom => atom.atomName === 'SD');
    return sulphurs.some(N => {
      const dist = distance(center, N);
      return dist < AR_SULPHUR_MAX_DISTANCE;
    });
  }
}


