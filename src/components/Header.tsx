import React from "react";
import "../App.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass, faRightFromBracket, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, useAppDispatch } from "./../hooks/storeHooks";
import { getUserProfile } from "../features/userActions";
import logo from "./../assets/images/Logo.svg";
import { logout } from "../features/userSlice";

type HeaderPropsType = {
  useBackSpace?: boolean;
  useLogo?: boolean;
};

function Header({ useBackSpace = false, useLogo = false }) {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (userState.accessToken !== null) {
      dispatch(getUserProfile());
    }
  }, [userState.accessToken, dispatch]);

  const onClickLogoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const onClickLogoHandler = () => {
    navigate("/");
  };

  const onClickSearchHandler = () => {
    navigate("/search");
  };

  const onClickBackSpaceHandler = () => {
    navigate(-1);
  };
  const onClickMypageHandler = () => {
    navigate("/MainMypage");
  };

  return (
    <StyledHeader>
      {useLogo === true && <StyledLogo onClick={onClickLogoHandler} src={logo} alt={"knewnew"}></StyledLogo>}
      {useBackSpace === true && <StyledFontAwesomeIcon onClick={onClickBackSpaceHandler} icon={faAngleLeft} />}
      <StyledDiv>
        <StyledFontAwesomeIcon onClick={onClickLogoutHandler} icon={faRightFromBracket} />
        <StyledFontAwesomeIcon onClick={onClickSearchHandler} icon={faMagnifyingGlass} />
        <StyledFontAwesomeIcon onClick={onClickMypageHandler} icon={faBell} />
      </StyledDiv>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: sticky;
  z-index: 10;

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

const StyledLogo = styled.img`
  height: 25px;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  padding: 5px;
  width: 25px;
  height: 25px;
  &:hover {
    cursor: grab;
  }
`;

export default Header;
