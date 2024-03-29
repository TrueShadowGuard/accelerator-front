import axios from "./axios";
import { AxiosRequestConfig } from "axios";

const postOptions: AxiosRequestConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const pentUnFold = {
  post: {
    pdb: (
      pdbFile: File,
      include1d: boolean,
      include2d: boolean,
      include3d: boolean,
      picResult,
      chain: string,
      isFileNeeded: boolen,
      isCustomDsspNeeded: boolen,
      ip: string
    ) => {
      const formData = new FormData();
      formData.append("pdbFile", pdbFile);
      formData.append("include1d", include1d);
      formData.append("include2d", include2d);
      formData.append("include3d", include3d);
      formData.append("picResult", picResult);
      formData.append("chain", chain);
      formData.append("isFileNeeded", !isFileNeeded);
      formData.append("isCustomDsspNeeded", isCustomDsspNeeded);
      formData.append("ip", ip);
      return axios.post("/chemistry/pent-un-fold", formData, postOptions);
    },
    sequence: (aminoAcidSequence: string) => {
      const formData = new FormData();
      formData.append("sequence", aminoAcidSequence);
      return axios.post(
        "/chemistry/pent-un-fold/sequence",
        formData,
        postOptions
      );
    },
  },
  get: () => axios.get("/chemistry/pent-un-fold"),
};

export default pentUnFold;
