import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import authApi from "../apis/api/auth"
import Google from "../assets/images/btn_google_signin_light_normal_web@2x.png"

const Container = styled.div`
  width:400px;
  height:100vh;  
  display:flex;
  flex-direction:column;
  gap: 50px;
  background-color:rgb(246,246,252);
  
  justify-content:center;
  align-items:center;
  margin-left:500px;

  `

const Input = styled.input`
  width: 300px;
  height: 50px;
  `
const ButtonLogin = styled.button`
  width: 300px;
  height: 50px;
  background-color:rgb(255,83,85);
  color: white;
`

const ButtonGoogleLogin = styled.button`
  width: 300px; 
  height: 50px;
  background-color: white;
  font-weight:bold;
  color:rgb(117,117,117);
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
`
const Img = styled.img`
width:310px;
height:70px;
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
      <Input
        name="id"
        placeholder="ID"
        onChange={onChange}
        value={id}
      />
      <Input
        name="password"
        placeholder="PASSWORD"
        onChange={onChange}
        value={password}
      />
      <ButtonLogin onClick={onClickLogin}>로그인</ButtonLogin>
      {errorMessage === "" ? null : errorMessage}

      <Img src={Google} onClick={onClickGoogle} />

    </Container>


  );
}

export default Login;
