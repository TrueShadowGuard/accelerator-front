export default function parsePdb(pdb) {
  const chains = {};

  let rows = pdb.split("\n");
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    if (!row.startsWith("ATOM")) continue;

    let aminoName = row.slice(16, 20);
    if(aminoName.length === 4 && aminoName[0] === "A") aminoName = aminoName.slice(1);
    let columns = [
      row.slice(0, 6),
      row.slice(6, 11),
      row.slice(11, 16),
      aminoName,
      row.slice(20, 22),
      row.slice(22, 26),
      row.slice(26, 38),
      row.slice(38, 46),
      row.slice(46, 55)
    ].map(col => col.trim());


    const [, atomId, atomName, aminoAcidName, chainName , aminoAcidId, x, y, z] = columns;

    const atomData = {atomId, atomName, aminoAcidName, aminoAcidId, chainName, x: +x, y: +y, z: +z};

    if(!chains[chainName]) {
      chains[chainName] = {};
    }

    const chain = chains[chainName];

    if (chain[aminoAcidId]) {
      chain[aminoAcidId].push(atomData);
    } else {
      chain[aminoAcidId] = [atomData];
    }
  }

  return chains;
}
