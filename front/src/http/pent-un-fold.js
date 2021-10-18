import axios from "./axios";
import {AxiosRequestConfig} from "axios";

const postOptions : AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

const pentUnFold = {
  post: (pdbFile: File, include3d: boolean) => {
    const formData = new FormData();
    formData.append("pdbFile", pdbFile);
    formData.append("include3d", include3d);
    return axios.post('/chemistry/pent-un-fold',
      formData, postOptions)
  },
  get: () => axios.get('/chemistry/pent-un-fold')
}

export default pentUnFold;
