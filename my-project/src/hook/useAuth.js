import { useContext } from "react";
import AuthContext from "../apicontext/authContext";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
