import axios from "axios"
// const BASEURL = process.env.REACT_APP_LOCAL_URL;
const URL ="https://school-management-system-bo9v-oneharry.vercel.app"
export default axios.create({
  baseURL: URL,
});
export const axiosPrivate = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
