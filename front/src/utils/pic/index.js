import checkDisulphideBonded from "./checkDisulphideBonded";
import checkIonicBonded from "./checkIonicBonded";
import checkArArBonded from "./checkArArBonded";
import checkArCationBonded from "./checkArCationBonded";
import checkArSulphurBonded from "./checkArSulphurBonded";
import checkHydrogenBonded from "./checkHydrogenBonded";
import groupByAminoAsidId from "./groupByAminoAsidId";

export default function pic(pdb) {
  const aminoAcids = groupByAminoAsidId(pdb);
  const aminoAcidsArray = Object.entries(aminoAcids);

  const aminoAcidPairs = [];

  for (let i = 0; i < aminoAcidsArray.length - 1; i++) {
    for (let j = i + 1; j < aminoAcidsArray.length; j++) {

      const firstAminoAtoms = aminoAcidsArray[i][1];
      const secondAminoAtoms = aminoAcidsArray[j][1];
      const firstAminoId = aminoAcidsArray[i][0];
      const secondAminoId = aminoAcidsArray[j][0];

      [checkDisulphideBonded, checkIonicBonded, checkArArBonded, checkArCationBonded, checkArSulphurBonded].forEach(check => {
        const areBonded = check(firstAminoAtoms, secondAminoAtoms);
        if(areBonded) {
          aminoAcidPairs.push([firstAminoId, secondAminoId]);
        }
      });

      const hydrogenBondsCount = checkHydrogenBonded(firstAminoAtoms, secondAminoAtoms);
      if (hydrogenBondsCount) {
        for(let i = 0; i < hydrogenBondsCount; i++) {
          aminoAcidPairs.push([firstAminoId, secondAminoId]);
        }
      }

    }
  }

  return aminoAcidPairs;
}





