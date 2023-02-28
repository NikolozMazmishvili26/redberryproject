import { Link } from "react-router-dom";
import styled from "styled-components";

// import assets
import logo from "../../assets/logo.png";
import MobileLanding from "../../assets/MobileLanding.png";
import DesktopLanding from "../../assets/DesktopLanding.png";

function Landing() {
  return (
    <LandingContainer>
      <LandingLogo src={logo} alt="logo" />
      <MobileImage src={MobileLanding} alt="landingImage" />
      <DesktopImage src={DesktopLanding} alt="desktopImage" />
      {/* Button Container */}
      <ButtonContainer>
        <Link to="/create">
          <Button>ჩანაწერების დამატება</Button>
        </Link>
        <Link to="/list">
          <Button>ჩანაწერების სია</Button>
        </Link>
      </ButtonContainer>
    </LandingContainer>
  );
}

export default Landing;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 67px 16px 35px 16px;

  @media screen and (min-width: 785px) {
    padding: 0px;
    padding-top: 79px;
  }
`;

const LandingLogo = styled.img`
  width: 112px;
`;

const MobileImage = styled.img`
  width: 268.5px;
  object-fit: cover;
  margin-top: 117px;

  @media screen and (min-width: 785px) {
    display: none;
  }
`;

const DesktopImage = styled.img`
  @media screen and (max-width: 785px) {
    display: none;
  }

  @media screen and (min-width: 785px) {
    margin-top: 85px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 122px;

  @media screen and (min-width: 785px) {
    max-width: 387px;
    width: 100%;
    padding: 0px;
    margin-top: 123px;
  }
`;

const Button = styled.button`
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  padding: 18px 60px;
  border-radius: 8px;
  background-color: var(--btn-color);
  border: none;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: var(--btn-hover-color);
  }
`;
