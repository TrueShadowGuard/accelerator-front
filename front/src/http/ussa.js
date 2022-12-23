import axios, {AxiosRequestConfig} from "./axios";

const postOptions: AxiosRequestConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

const ussa = {
  post: {
    ussa: (
        pdbFile: File,
        chain: String
    ) => {
      const formData = new FormData();
      formData.append("pdbFile", pdbFile);
      formData.append("chain", chain);
      return axios.post("/chemistry/ussa", formData, postOptions);
    },
  },
};

export default ussa;