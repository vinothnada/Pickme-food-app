import axios from "axios";

const baseURL = "http://localhost:3000/prod";

const API = axios.create({
  baseURL,
});

export default API;
