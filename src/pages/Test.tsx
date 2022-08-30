import React, { useState } from "react";
import styled from "styled-components";
import { store } from "../app/store";
import { injectStore } from "./../apis/utils";
import authApi from "../apis/api/auth";
import { useAppSelector, useAppDispatch } from "./../hooks/storeHooks";
import { getUserProfile, userLogin } from "../features/userActions";

injectStore(store);

function Test() {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onClickhandler = () => {
    dispatch(userLogin({ email, password }));
  };
  React.useEffect(() => {
    console.log(userState);
  }, [userState]);

  React.useEffect(() => {
    if (userState.accessToken !== null) {
      dispatch(getUserProfile());
    }
  }, [userState.accessToken, dispatch]);
  return (
    <div>
      <input placeholder={"email"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input placeholder={"password"} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={onClickhandler}>전송</button>
    </div>
  );
}

export default Test;
