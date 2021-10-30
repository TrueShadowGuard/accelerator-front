const {distance} = require("./common");

export default function checkHydrogenBonded(firstAminoAtoms, secondAminoAtoms) {
  return check(firstAminoAtoms, secondAminoAtoms) + check(secondAminoAtoms, firstAminoAtoms);


  function check(firstAminoAtoms, secondAminoAtoms) {
    // const f = "128";
    // const s = "178";
    // const i1 = firstAminoAtoms[0].aminoAcidId;
    // const i2 = secondAminoAtoms[0].aminoAcidId;

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
          //if(i1 === f && i2 === s || i1 === s && i2 === f) debugger;
          count+=0.5;
        } else if(
          firstAtom.atomName.startsWith("N") &&
          secondAtom.atomName.startsWith("O") &&
          Math.abs(firstAtom.aminoAcidId - secondAtom.aminoAcidId) > 1 &&
          dist < 3.5
        ) {
          //if(i1 === f && i2 === s || i1 === s && i2 === f) debugger;
          count++;
        } else if (
          firstAtom.atomName.startsWith("S") &&
          secondAtom.atomName.startsWith("O") &&
          dist < 4
        ) {
          //if(i1 === f && i2 === s || i1 === s && i2 === f) debugger;
          count++;
        }

      }
    }
    return count;
  }
}
