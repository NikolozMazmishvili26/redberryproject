import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import assets
import arrow from "../../assets/backArrow.png";

interface DataHeadersProps {
  locationPathname: string;
}

function DataHeader({ locationPathname }: DataHeadersProps) {
  const navigate = useNavigate();

  const handlePrev = () => {
    if (locationPathname === "/list") {
      navigate("/");
    } else if (locationPathname !== "/list") {
      navigate("/list");
    }
  };

  return (
    <HeaderContainer>
      <ArrowBox onClick={handlePrev}>
        <BackArrowImage src={arrow} alt="arrow" />
      </ArrowBox>
      <HeaderTitle>
        {locationPathname === "/list" && "ჩანაწერების სია"}
        {locationPathname !== "/list" && "ლეპტოპის ინფო"}
      </HeaderTitle>
    </HeaderContainer>
  );
}

export default DataHeader;

const HeaderContainer = styled.div``;

const ArrowBox = styled.div`
  position: absolute;
  left: 16px;
  top: 34px;

  @media screen and (min-width: 1180px) {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    cursor: pointer;
    background-color: var(--arrow-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 53px;
    left: 70px;
  }
`;

const BackArrowImage = styled.img``;

const HeaderTitle = styled.h2`
  margin-top: 31px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--counter-title-color);

  @media screen and (min-width: 1180px) {
    margin-top: 79px;
    font-size: 34px;
    line-height: 21px;
  }
`;
