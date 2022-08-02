import axios from "./axios";
import { AxiosRequestConfig } from "axios";

const postOptions: AxiosRequestConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const hydrogenAccuracy = {
  post: {
    hydrogen: (
        pdbFile: File,
        chain: String
    ) => {
      const formData = new FormData();
      formData.append("pdbFile", pdbFile);
      formData.append("chain", chain);
      return axios.post("/chemistry/hydrogen-accuracy", formData, postOptions);
    },
  },
};

export default hydrogenAccuracy;