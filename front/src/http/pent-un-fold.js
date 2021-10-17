import axios from "./axios";
import {AxiosRequestConfig} from "axios";

const postOptions : AxiosRequestConfig = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

const pentUnFold = {
  post: (pdbFile: File, included3d: boolean) => {
    const formData = new FormData();
    formData.append("pdbFile", pdbFile);
    formData.append("included3d", included3d);
    return axios.post('/chemistry/pent-un-fold',
      formData, postOptions)
  },
  get: () => axios.get('/chemistry/pent-un-fold')
}

export default pentUnFold;
