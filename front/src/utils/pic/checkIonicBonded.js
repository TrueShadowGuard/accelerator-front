import {
  distance,
  IONIC_MAX_DISTANCE,
  IONIC_MIN_DISTANCE,
  NEGATIVE_CHARGED_AMINO_ACIDS,
  POSITIVE_CHARGED_AMINO_ACIDS
} from "./common";

export default function checkIonicBonded(firstAminoAtoms, secondAminoAtoms) {
  return check(firstAminoAtoms, secondAminoAtoms) || check(secondAminoAtoms, firstAminoAtoms);

  function check(firstAminoAtoms, secondAminoAtoms) {
    const firstAminoName = firstAminoAtoms[0].aminoAcidName;
    const secondAminoName = secondAminoAtoms[0].aminoAcidName;

    if(firstAminoAtoms[0].aminoAcidId === "201" && secondAminoAtoms[0].aminoAcidId === "221") debugger;

    if (POSITIVE_CHARGED_AMINO_ACIDS.includes(firstAminoName) && NEGATIVE_CHARGED_AMINO_ACIDS.includes(secondAminoName)) {
      if(firstAminoAtoms[0].aminoAcidId === "201" && secondAminoAtoms[0].aminoAcidId === "221") debugger;
      for (let firstAtom of firstAminoAtoms) {
        for (let secondAtom of secondAminoAtoms) {

          if (
            (firstAtom.atomName.startsWith('N') && firstAtom.atomName !== 'N') &&
            (secondAtom.atomName.startsWith('O') && secondAtom.atomName !== 'O')
          ) {
            const dist = distance(firstAtom, secondAtom);
            if(firstAminoAtoms[0].aminoAcidId === "201" && secondAminoAtoms[0].aminoAcidId === "221") debugger;
            if (dist < IONIC_MAX_DISTANCE && dist > IONIC_MIN_DISTANCE) {
              if(firstAminoAtoms[0].aminoAcidId === "201" && secondAminoAtoms[0].aminoAcidId === "221") debugger;
              return true;
            }
          }
        }
      }
      if(firstAminoAtoms[0].aminoAcidId === "201" && secondAminoAtoms[0].aminoAcidId === "221") debugger;
      return false;
    }
  }
}
