export const DISULPHIDE_MAX_DISTANCE = 2.2 ** 1;

export const HYDROPHOBIC_AMINO_ACIDS = ['ALA', 'VAL', 'LEU', 'ILE', 'MET', 'PHE', 'TRP', 'PRO', 'TYR'];
export const HYDROPHOBIC_NON_ACCEPTABLE_CARBONS = ['C', 'CA'];
export const HYDROPHOBIC_MAX_DISTANCE = 5 ** 1;

export const POSITIVE_CHARGED_AMINO_ACIDS = ['ARG', 'LYS', 'HIS'];
export const NEGATIVE_CHARGED_AMINO_ACIDS = ['ASP', 'GLU'];
export const IONIC_MIN_DISTANCE = 3.5 ** 1;
export const IONIC_MAX_DISTANCE = 6 ** 1;

export const ARYL_AMINO_ACIDS = ['PHE', 'TYR', 'TRP'];
export const AR_AR_MIN_DISTANCE = 3.5 ** 1;
export const AR_AR_MAX_DISTANCE = 7 ** 1;

export const AR_CATION_MAX_DISTANCE = 6;

export const AR_SULPHUR_MAX_DISTANCE = 5.3;

export function distance(vec1, vec2) {
  return Math.sqrt(
    (vec1.x - vec2.x) ** 2 +
    (vec1.y - vec2.y) ** 2 +
    (vec1.z - vec2.z) ** 2
  );
}

export function centerOfAromaticRingOf(aminoAtoms) {
  const aminoName = aminoAtoms[0].aminoAcidName;
  let firstCarbon, secondCarbon;
  switch (aminoName) {
    case 'PHE':
    case 'TYR':
      firstCarbon = aminoAtoms.find(atom => atom.atomName === 'CG');
      secondCarbon = aminoAtoms.find(atom => atom.atomName === 'CZ');
      return {
        x: (firstCarbon.x + secondCarbon.x) / 2,
        y: (firstCarbon.y + secondCarbon.y) / 2,
        z: (firstCarbon.z + secondCarbon.z) / 2
      }
    case 'TRP':
      firstCarbon = aminoAtoms.find(atom => atom.atomName === 'CD2');
      secondCarbon = aminoAtoms.find(atom => atom.atomName === 'CH2');
      return {
        x: (firstCarbon.x + secondCarbon.x) / 2,
        y: (firstCarbon.y + secondCarbon.y) / 2,
        z: (firstCarbon.z + secondCarbon.z) / 2
      }
    default:
      console.error('NOT AROMATIC')
  }
}
