import axios from "axios";

export default axios.create({
  baseURL: window.location.hostname + 8080
});


