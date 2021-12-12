import axios from "axios";

const a = axios.create({
  baseURL: "http://" + window.location.hostname + ":8080"
});

export default a;

window.axios = a;


