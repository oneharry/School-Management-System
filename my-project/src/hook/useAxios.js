import { useEffect } from "react";
import useAuth from "./useAuth";
import { axiosPrivate } from "../api/axios";

function useAxiosPrivate() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const reqIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (!config.headers["Authorization"] && accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const resIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          // You can add logic here to obtain a new access token if needed
          // and update it in localStorage and the auth state.
          // For example:
          // const newAccessToken = await yourAccessTokenObtainingFunction();
          // localStorage.setItem("accessToken", newAccessToken);
          // setAuth((prevAuth) => ({
          //   ...prevAuth,
          //   accessToken: newAccessToken,
          // }));
          // prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          // return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(reqIntercept);
      axiosPrivate.interceptors.response.eject(resIntercept);
    };
  }, [auth, setAuth]);

  return axiosPrivate;
}

export default useAxiosPrivate;
