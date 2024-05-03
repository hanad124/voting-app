import { axiosInstance } from ".";

export const getUser = async () => {
  try {
    const response = await axiosInstance.get("/auth/me");

    return response;
  } catch (error) {
    console.log(error);
  }
};
