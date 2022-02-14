import axios from "./axios";
import { AxiosRequestConfig } from "axios";

const postOptions: AxiosRequestConfig = {
    headers: {
        "Content-Type": "multipart/form-data",
    },
};

const comments = {
    post: {
        comment: (
            fullName: string,
            selectedCountry: string,
            comment: string,
            value: string
        ) => {
            const formData = new FormData();
            formData.append("fullName", fullName);
            formData.append("selectedCountry", selectedCountry);
            formData.append("comment", comment);
            formData.append("value", value);
            return axios.post("/chemistry/comments", formData, postOptions);
        },
    },
    get: () => axios.get("/chemistry/comments"),
};

export default comments;