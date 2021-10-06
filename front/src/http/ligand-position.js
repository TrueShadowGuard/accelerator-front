import axios from "axios";

const ligandPosition = {
  post: (ligandName: string, maxAcceptableDistance: number, PDBFile: string) => {
    console.log({ligandName, maxAcceptableDistance, PDBFile});
    return axios.post('http://localhost:8080/chemistry/ligand-position?ligandName=H&maxAcceptableDistance=10&PDBFile=uhkh', {
      ligandName,
      maxAcceptableDistance,
      PDBFile
    })
  },
  get: () => axios.get('http://localhost:8080/chemistry/ligand-position')
}

export default ligandPosition;
