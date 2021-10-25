export default function groupByAminoAsidId(pdb) {
  const result = Object.create(null);
  let rows = pdb.split("\n");
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    if (!row.startsWith("ATOM")) continue;
    let columns = [
      row.slice(0, 6),
      row.slice(6, 11),
      row.slice(11, 16),
      row.slice(16, 20),
      row.slice(20, 22),
      row.slice(22, 26),
      row.slice(26, 38),
      row.slice(38, 46),
      row.slice(46, 55)
    ].map(col => col.trim());


    const [, atomId, atomName, aminoAcidName, , aminoAcidId, x, y, z] = columns;

    const atomData = {atomId, atomName, aminoAcidName, aminoAcidId, x: +x, y: +y, z: +z};

    if (result[aminoAcidId]) {
      result[aminoAcidId].push(atomData);
    } else {
      result[aminoAcidId] = [atomData];
    }
  }
  return result;
}
