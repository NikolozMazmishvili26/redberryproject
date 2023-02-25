import { Link } from "react-router-dom";
import styled from "styled-components";

// import assets
import success from "../../assets/Frame.png";

function Success() {
  return (
    <SuccessContainer>
      <SuccessBox>
        <SuccessImage src={success} alt="success" />
        <SuccessTitle>ჩანაწერი დამატებულია</SuccessTitle>
        <ButtonContainer>
          <ListButton>სიაში გადაყვანა</ListButton>
          <Link to="/">
            <HomeButton>მთავარი</HomeButton>
          </Link>
        </ButtonContainer>
      </SuccessBox>
    </SuccessContainer>
  );
}

export default Success;

const SuccessContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  background: #4a4a4a;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const SuccessBox = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 847px;
  width: 100%;
  margin: auto;

  @media screen and (min-width: 847px) {
    border-radius: var(--border-radius);
  }
`;

const SuccessImage = styled.img`
  margin-top: 157px;

  @media screen and (min-width: 847px) {
    margin-top: 13px;
  }
`;

const SuccessTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 39px;
  text-align: center;
  color: #292929;
  max-width: 164px;
  width: 100%;
  @media screen and (min-width: 847px) {
    max-width: 314px;
    width: 100%;
    font-size: 25px;
    line-height: 31px;
  }
`;

// button container styles
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 38px;
  margin-top: 159px;
  width: 100%;
  @media screen and (min-width: 847px) {
    margin-top: 79px;
    row-gap: 28px;
  }
`;

const ListButton = styled.button`
  max-width: 297px;
  width: 100%;
  height: 60px;
  background-color: var(--btn-color);
  border: none;
  border-radius: var(--border-radius);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: var(--btn-hover-color);
  }
`;

const HomeButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #0089a7;
  margin-bottom: 70px;
  transition-duration: 0.2s;

  &:hover {
    color: var(--btn-hover-color);
  }

  @media screen and (min-width: 847px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 44px;
  }
`;
