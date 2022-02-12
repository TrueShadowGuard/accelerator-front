import axios from "./axios";

const ligandPosition = {
  post: (
    ligandName: string,
    maxAcceptableDistance: number,
    PDBFile: string
  ) => {
    return axios.post("/chemistry/ligand-position", {
      ligandName,
      maxAcceptableDistance,
      PDBFile,
    });
  },
  get: () => axios.get("/chemistry/ligand-position"),
};

export default ligandPosition;
