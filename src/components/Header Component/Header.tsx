import styled from "styled-components";

// import assets
import backArrow from "../../assets/backArrow.png";
import employerLine from "../../assets/employerLine.png";
import laptopLine from "../../assets/laptopLine.png";

interface HeaderProps {
  step: number;
  handlePrev: () => void;
}

function Header({ step, handlePrev }: HeaderProps) {
  return (
    <HeaderContainer>
      <BackArrowBox>
        <BackArrowImage src={backArrow} alt="arrow" onClick={handlePrev} />
      </BackArrowBox>
      <HeaderCounterContainer>
        {/*  */}
        <EmployerContainer>
          <EmployerTitle>
            {step === 1 ? "თანამშრომლის ინფო" : "ლეპტოპის მახასიათებლები"}
          </EmployerTitle>
          {step === 1 && (
            <EmployerLineImage src={employerLine} alt="lineImage" />
          )}
        </EmployerContainer>
        {/*  */}
        <LaptopContainer>
          <LaptopTitle>ლეპტოპის მახასიათებლები</LaptopTitle>
          {step === 2 && <LaptopLineImage src={laptopLine} alt="lineImage" />}
        </LaptopContainer>

        <Counter>{step === 1 ? "1/2" : "2/2"}</Counter>
      </HeaderCounterContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BackArrowBox = styled.div`
  position: absolute;
  top: 34px;
  left: 16px;
  cursor: pointer;

  @media screen and (min-width: 1230px) {
    width: 53px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--arrow-bg-color);
    border-radius: 50%;
    top: 53px;
    left: 70px;
  }
`;

const BackArrowImage = styled.img`
  background-color: transparent;
`;

// header Counter Styles
const HeaderCounterContainer = styled.div`
  text-align: center;
  margin-top: 31px;
  @media screen and (min-width: 1230px) {
    display: flex;
    align-items: flex-start;
    gap: 66px;
    margin-top: 91px;
  }
`;

// Employer Container

const EmployerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
`;

const EmployerTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--counter-title-color);
  cursor: pointer;

  @media screen and (min-width: 1230px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const EmployerLineImage = styled.img`
  display: none;
  @media screen and (min-width: 1230px) {
    display: block;
  }
`;

// Laptop Container

const LaptopContainer = styled(EmployerContainer)``;

const LaptopTitle = styled.h2`
  display: none;
  @media screen and (min-width: 1230px) {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: var(--counter-title-color);
    display: block;
    cursor: pointer;
  }
`;

const LaptopLineImage = styled.img`
  display: none;
  @media screen and (min-width: 1230px) {
    display: block;
  }
`;

const Counter = styled.p`
  margin-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: var(--counter-color);

  @media screen and (min-width: 1230px) {
    display: none;
  }
`;
