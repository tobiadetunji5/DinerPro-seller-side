import { delay } from "@/lib/Delay";
import apiClient from "./AxiosApiClient";


const login = "/auth/login/seller";
const register = "/auth/register/seller";
const AuthService = {};

AuthService.login = async (loginData) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await apiClient.post(login, loginData, headers);
    return res.data;
  } catch (error) {
    throw error
  }
};

AuthService.register = async (sellerData) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await apiClient.post(register, sellerData, headers);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default AuthService;
