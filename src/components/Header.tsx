import React from "react";
import "../App.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, useAppDispatch } from "./../hooks/storeHooks";
import { getUserProfile } from "../features/userActions";
import logo from "./../assets/images/Logo.svg";
import { logout } from "../features/userSlice";

function Header() {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (userState.accessToken !== null) {
      dispatch(getUserProfile());
    }
  }, [userState.accessToken, dispatch]);
  const onClickHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <StyledHeader>
      <img src={logo} alt={"knewnew"}></img>
      <div>
        <button onClick={onClickHandler}>로그아웃</button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBell} />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  height: 64px;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: calc(100%-40px);
  padding: 0px 20px;

  align-items: center;
  transition-duration: 0.8s;
  box-shadow: 0 1px 5px gray;
  background: white;
`;

const StyledDiv = styled.div``;

export default Header;
