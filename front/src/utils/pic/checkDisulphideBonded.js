import {distance, DISULPHIDE_MAX_DISTANCE} from "./common";

export default function checkDisulphideBonded(firstAminoAtoms, secondAminoAtoms) {
  const firstAminoName = firstAminoAtoms[0].aminoAcidName;
  const secondAminoName = secondAminoAtoms[0].aminoAcidName;
  if (firstAminoName !== "CYS" || secondAminoName !== "CYS") return false;
  const firstSulphur = firstAminoAtoms.find(atom => atom.atomName === 'SG');
  const secondSulphur = secondAminoAtoms.find(atom => atom.atomName === 'SG');
  const dist = distance(firstSulphur, secondSulphur);
  return dist < DISULPHIDE_MAX_DISTANCE;
}
