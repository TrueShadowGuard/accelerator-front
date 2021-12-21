const {distance} = require("./common");

export default function checkHydrogenBonded(firstAminoAtoms, secondAminoAtoms) {
  return check(firstAminoAtoms, secondAminoAtoms) + check(secondAminoAtoms, firstAminoAtoms);


  function check(firstAminoAtoms, secondAminoAtoms) {
    let count = 0;

    for (let firstAtom of firstAminoAtoms) {
      for (let secondAtom of secondAminoAtoms) {
        const dist = distance(firstAtom, secondAtom);
        if (firstAtom.atomName.startsWith("O") &&
          firstAtom.atomName !== "O" &&
          secondAtom.atomName.startsWith('O') &&
          secondAtom.atomName !== "O" &&
          dist < 3.5
        ) {
          count+=0.5;
        } else if(
          firstAtom.atomName.startsWith("N") &&
          secondAtom.atomName.startsWith("O") &&
          Math.abs(firstAtom.aminoAcidId - secondAtom.aminoAcidId) > 1 &&
          dist < 3.5
        ) {
          count++;
        } else if (
          firstAtom.atomName.startsWith("S") &&
          secondAtom.atomName.startsWith("O") &&
          dist < 4
        ) {
          count++;
        }

      }
    }
    return count;
  }
}
