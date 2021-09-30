import axios, {AxiosProxyConfig} from "axios";

const config = {
  host: "localhost",
  port: "8080",
}

const ligandPosition = {
  post: (ligandName: string, maxAcceptableDistance: number, PDBFile: string) => axios.post('http://localhost:8080/chemistry/ligand-position', {
    ligandName,
    maxAcceptableDistance,
    PDBFile
  }),
  get: () => axios.get('http://localhost:8080/chemistry/ligand-position')
}

export default ligandPosition;
