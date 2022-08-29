import React from "react";
import styled from "styled-components";
import { store } from "./../store";
import { injectStore } from "./../apis/utils";
import authApi from "../apis/api/auth"

injectStore(store);

function Test() {
  React.useEffect(() => {
    const result = authApi.logIn({
      "providerType": "email",
      "email": "test@codestates.com",
      "password": "test"
    })
    console.log("useEffect", result);
    // store.login()
  }, [])
  return (
    <div>asdf</div>
  );
}

export default Test;
