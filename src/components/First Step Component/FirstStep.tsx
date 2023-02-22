import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

// import assets
import logo from "../../assets/logo2.png";

// import components
import Header from "../Header Component/Header";
import Input from "../Input Component/Input";
import Select from "../Select Component/Select";

// interfaces

interface FirstStepProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handlePrev: () => void;
}

export interface DataProps {
  id: number;
  name: string;
  team_id: number;
}

// api links
const teamAPI = "https://pcfy.redberryinternship.ge/api/teams";
const positionAPI = "https://pcfy.redberryinternship.ge/api/positions";

function FirstStep({ step, setStep, handlePrev }: FirstStepProps) {
  //
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const nextPage = (e: any) => {
    e.preventDefault();
    handleSubmit(() => {
      setStep(step + 1);
    })();
  };

  // get data from backend
  const [teams, setTeams] = useState<DataProps[]>([]);
  const [teamId, setTeamId] = useState<number | null>(null);
  const [positions, setPositions] = useState<DataProps[]>([]);

  useEffect(() => {
    const getTeamsData = async function () {
      const getData = await axios.get(teamAPI);
      const response = await getData.data;
      setTeams(response.data);
    };
    getTeamsData();
  }, []);

  useEffect(() => {
    const getPositionData = async function () {
      const getData = await axios.get(positionAPI);
      const response = await getData.data;
      setPositions(response.data);
    };
    getPositionData();
  }, []);

  const filterPositionData = positions.filter(
    (position) => position.team_id === teamId
  );

  return (
    <>
      <Header step={step} handlePrev={handlePrev} />
      {/*  */}
      <FirstStepContainer>
        <Form onSubmit={nextPage}>
          {/* UserName Container */}
          <UserNameContainer>
            <InputBox>
              <Input
                errors={errors}
                register={register}
                labelValue="სახელი"
                inputIdValue="firstName"
                placeholderValue="ნიკოლოზ"
                registerValue="firstName"
                regex={/^[ა-ჰ\s]+$/}
                regexErrorMessage="გამოიყენე ქართული ასოები"
              />
            </InputBox>
            <InputBox>
              <Input
                errors={errors}
                register={register}
                labelValue="გვარი"
                inputIdValue="lastName"
                placeholderValue="მაზმიშვილი"
                registerValue="lastName"
                regex={/^[ა-ჰ\s]+$/}
                regexErrorMessage="გამოიყენე ქართული ასოები"
              />
            </InputBox>
          </UserNameContainer>
          {/* Selectbox Container */}

          <SelectboxContainer>
            <div>
              <Select
                errors={errors}
                register={register}
                setValue={setValue}
                clearErrors={clearErrors}
                data={teams}
                setTeamId={setTeamId}
                selectValue="თიმი"
                registerValue="teamSelectValue"
              />
            </div>
            <div>
              <Select
                errors={errors}
                register={register}
                setValue={setValue}
                clearErrors={clearErrors}
                data={filterPositionData}
                setTeamId={setTeamId}
                selectValue="პოზიცია"
                registerValue="positionSelectValue"
              />
            </div>
          </SelectboxContainer>

          {/* Contact Container */}

          <ContactContainer>
            <div>
              <Input
                errors={errors}
                register={register}
                labelValue="მეილი"
                inputIdValue="email"
                placeholderValue="nika@redberry.ge"
                registerValue="email"
                regex={/^\S+@redberry\.ge$/}
                regexErrorMessage="უნდა მთავრდებოდეს @redberry.ge-ით"
              />
            </div>

            <div>
              <Input
                errors={errors}
                register={register}
                labelValue="ტელეფონის ნომერი"
                inputIdValue="phoneNumber"
                placeholderValue="+995 593 20 99 77"
                registerValue="phoneNumber"
                regex={/^(\+995|0)5\d{8}$/}
                regexErrorMessage="გამოიყენე ქართული მობ-ნომრის ფორმატი"
              />
            </div>
          </ContactContainer>

          <NextButton type="submit" onClick={nextPage}>
            შემდეგი
          </NextButton>
        </Form>
      </FirstStepContainer>
      <LogoImage src={logo} alt="logo" />
    </>
  );
}

export default FirstStep;

const FirstStepContainer = styled.div`
  max-width: 1226px;
  width: 100%;
  background-color: var(--container-bg);
  border-radius: 12px 12px 0px 0px;
  margin: 11px auto;
  display: flex;
  justify-content: center;
  padding: 38px 16px 58px 16px;
  @media screen and (min-width: 890px) {
    padding: 96px 16px 44px 16px;
    margin-top: 25px;
  }

  @media screen and (min-width: 950px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Form = styled.form`
  max-width: 878px;
  width: 100%;
`;

const LogoImage = styled.img`
  display: flex;
  margin: 67px auto;
  margin-bottom: 45px;

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

// User Name Container

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;

  @media screen and (min-width: 890px) {
    flex-direction: row;
    gap: 64px;
  }
`;

const InputBox = styled.div`
  max-width: 878px;
  width: 100%;
`;

// selectbox container

const SelectboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  gap: 46px;

  @media screen and (min-width: 890px) {
    margin-top: 52px;
    gap: 53px;
  }
`;

// user contact Container

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 25px;
  @media screen and (min-width: 890px) {
    margin-top: 51px;
    gap: 48px;
  }
`;

// next btn styles
const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background-color: var(--btn-color);
  border: none;
  cursor: pointer;
  border-radius: var(--border-radius);
  width: 132px;
  height: 46px;
  margin-top: 43px;
  margin-left: auto;
  transition-duration: 0.2s;

  @media screen and (min-width: 890px) {
    margin-top: 95px;
    width: 176px;
    height: 60px;
    font-size: 20px;
  }

  &:hover {
    background-color: var(--btn-hover-color);
  }
`;
