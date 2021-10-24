export default function groupByAminoAsidId(pdb) {
  const result = Object.create(null);
  let rows = pdb.split("\n");
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    if (!row.startsWith("ATOM")) continue;
    let columns = row.split(/\s+/g);


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
