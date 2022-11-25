import React from "react";
import { useRecoilState } from "recoil";
// import logo from "./logo.svg";
import "./App.css";
import { IUser, user } from "../store/atom";

const App: React.FC = () => {
  const [LoginUser, setLoginUser] = useRecoilState<IUser>(user);
  return (
    <div>
      <p>userName: {LoginUser.name}</p>
      <p>userId: {LoginUser.id}</p>
      <p>userPwd: {LoginUser.pwd}</p>
    </div>
  );
};

export default App;
