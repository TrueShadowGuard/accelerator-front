import axios from "./axios";
import {AxiosRequestConfig} from "axios";

const postOptions : AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

const pentUnFold = {
  post: (pdbFile: File) => {
    const formData = new FormData();
    formData.append("pdbFile", pdbFile);
    return axios.post('/chemistry/pent-un-fold',
      formData, postOptions)
  },
  get: () => axios.get('/chemistry/pent-un-fold')
}

export default pentUnFold;
