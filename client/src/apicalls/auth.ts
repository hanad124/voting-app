import { loginPayload, registerPayload } from "@/types/auth";
import { axiosInstance } from ".";

export const register = async (payload: registerPayload) => {
  try {
    const response = await axiosInstance.post(`/auth/register`, payload);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (payload: loginPayload) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, payload);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
