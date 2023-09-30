import axios from "axios"
// const BASEURL = process.env.REACT_APP_LOCAL_URL;
const URL ="http://localhost:5000"
export default axios.create({
  baseURL: URL,
});
export const axiosPrivate = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
