import checkDisulphideBonded from "./checkDisulphideBonded";
import checkIonicBonded from "./checkIonicBonded";
import checkArArBonded from "./checkArArBonded";
import checkArCationBonded from "./checkArCationBonded";
import checkArSulphurBonded from "./checkArSulphurBonded";
import checkHydrogenBonded from "./checkHydrogenBonded";
import groupByAminoAsidId from "./groupByAminoAsidId";
import checkHydrophobicBonded from "./checkHydrophobicBonded";

export default function pic(pdb) {
  const aminoAcids = groupByAminoAsidId(pdb);
  const aminoAcidsArray = Object.entries(aminoAcids);

  window.aminoAcids = aminoAcids;

  const aminoAcidPairs = [];

  const groupedPairs = {};

  for (let i = 0; i < aminoAcidsArray.length - 1; i++) {
    for (let j = i + 1; j < aminoAcidsArray.length; j++) {

      const firstAminoAtoms = aminoAcidsArray[i][1];
      const secondAminoAtoms = aminoAcidsArray[j][1];
      const firstAminoId = aminoAcidsArray[i][0];
      const secondAminoId = aminoAcidsArray[j][0];

      [checkHydrophobicBonded, checkDisulphideBonded, checkIonicBonded, checkArArBonded, checkArCationBonded, checkArSulphurBonded].forEach(check => {
        const areBonded = check(firstAminoAtoms, secondAminoAtoms);
        if(areBonded) {
          aminoAcidPairs.push([firstAminoId, secondAminoId]);
          groupedPairs[check.name] ?
            groupedPairs[check.name].push([firstAminoId, secondAminoId]) :
            groupedPairs[check.name] = [[firstAminoId, secondAminoId]];
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
  downloadString(aminoAcidPairs.join('\n'), "text/plain", "result.txt");
  downloadString(JSON.stringify(groupedPairs, null, 2),"text/plain", "grouped.txt");

  return aminoAcidPairs;
}

function downloadString(text, fileType, fileName) {
  var blob = new Blob([text], { type: fileType });

  var a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 60 * 1000);
}





