import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import authApi from "../apis/api/auth"


const Container = styled.div`
  display:flex;
  flex-direction:column;
  gap: 50px;
  background-color:rgb(246,246,252);
  height:100vh;
  justify-content:center;
  align-items:center;
  `
const ButtonLogin = styled.button`
  background-color:rgb(255,83,85);
  color: white;
`

const ButtonGoogleLogin = styled.button`
  background-color: white;
  font-weight:bold;
  color:rgb(117,117,117);
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
`

function Login() {

  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("")

  const { id, password } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=509839783946-7gsmhm71cdmi51phbmoddb8s8mfmbh0c.apps.googleusercontent.com&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email`;

  const onClickLogin = () => {
    axios
      .post(
        `https://dev.knewnnew.com/auth/login/`,
        {
          providerType: "email",
          email: id,
          password: password
        }
      ).then(res => {
        console.log(res)
        console.log(res.data.accessToken)
      }).catch(e => {
        console.log(e)
        setErrorMessage("아이디 비밀번호를 확인해주세요")
      }
      );
  };

  const onClickGoogle = () => {
    window.location.assign(OAUTH_URL);
  };

  return (

    <Container>
      <input
        name="id"
        placeholder="아이디"
        onChange={onChange}
        value={id}
      />
      <input
        name="password"
        placeholder="비밀번호"
        onChange={onChange}
        value={password}
      />
      <ButtonLogin onClick={onClickLogin}>로그인</ButtonLogin>
      {errorMessage === "" ? null : errorMessage}

      <ButtonGoogleLogin onClick={onClickGoogle}><img src="../assets/images/google_cover.jpg" /><span>Sign in with Google</span></ButtonGoogleLogin>

    </Container>


  );
}

export default Login;
