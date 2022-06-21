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
            country: string,
            content: string,
            rating: string
        ) => {
            const formData = new FormData();
            formData.append("fullName", fullName);
            formData.append("country", country);
            formData.append("content", content);
            formData.append("rating", rating);
            return axios.post("/chemistry/comments", formData, postOptions);
        },
    },
    get: () => axios.get("/chemistry/comments"),
};

export default comments;