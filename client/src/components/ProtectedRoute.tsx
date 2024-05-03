import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../apicalls/user";
import { message } from "antd";
import { userStore } from "../store/userStore";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { setData } = userStore();

  // get token from local storage

  const getData = async () => {
    try {
      const response = await getUser();
      console.log(response);
      if (response?.data) {
        setData(response?.data);
        setTimeout(() => {
          // dispatch(getUserDetails(response.data));
        }, 500);
      } else {
        setTimeout(() => {
          // message.error(response.message);
        }, 500);
      }
    } catch (error: any) {
      setTimeout(() => {
        message.error(error.message);
      }, 500);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/auth/login");
    } else {
      getData();
    }
  }, []);

  if (!sessionStorage.getItem("token")) {
    return null;
  }
  return <div>{children}</div>;
}

export default ProtectedRoute;
