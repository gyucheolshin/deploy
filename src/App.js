import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserStateContext } from "./context/Context";
import { Helmet } from "react-helmet";

import Routes from "./route/Routes";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const { users, successed, setUsers, setSuccessed, usersInfo, setUsersInfo } =
    useContext(UserStateContext);
  const email = localStorage.getItem("email");
  const headers = {
    accessToken: `${localStorage.getItem("accessToken")}`,
    "Access-Control-Allow-Origin": "*",
  };

  useEffect(() => {
    (async () => {
      await axios

        .get(`/api/v1/users/${email}`, {
          headers,
        })
        .then(
          (res) => {
            const datauser = res.data.data;
            setSuccessed(true);
            setUsers({
              ...users,
              email: datauser.email,
              nickname: datauser.nickname,
              userName: datauser.userName,
              id: datauser.id,
              profileImg: datauser.profileImg,
              userInfo: datauser.userInfo,
              authority: datauser.authority,
            });
            setUsersInfo({
              ...usersInfo,
              email: datauser.email,
              nickname: datauser.nickname,
              userName: datauser.userName,
              authority: datauser.authority,
              userInfo: datauser.userInfo,
              profileImg: datauser.profileImg,
            });
          },
          (err) => {
            console.log(err);
          }
        );
    })();
  }, [successed]);

  return (
    <div className="w-screen h-screen">
      <Helmet>
        <title>Battle-Q</title>
      </Helmet>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes />
      </BrowserRouter>
    </div>
  );
}
