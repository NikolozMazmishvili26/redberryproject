import styled from "styled-components";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from "react-hook-form/dist/types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import assets
import error from "../../../assets/error.png";
import money from "../../../assets/money.png";

// import components
import Input from "../../../components/Input Component/Input";
import InputRadio from "../../../components/Input Radio Component/InputRadio";
import { useState } from "react";

interface ThirdSectionProps {
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  nextPage: (e: any) => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function ThirdSection({
  errors,
  register,
  nextPage,
  setStep,
}: ThirdSectionProps) {
  // DatePicker state
  const [selectedDate, setSelectedDate] = useState<Date | null | undefined>(
    null
  );

  // DatePicker on change
  const handleDateChange = (date: Date | [Date, Date] | null): void => {
    if (date instanceof Date) {
      setSelectedDate(date);
    } else if (date === null) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date[0]);
    }
  };

  return (
    <ThirdSectionContainer>
      <TopSideContainer>
        <DateBox>
          <DateLabel htmlFor="date">შეძენის რიცხვი (არჩევითი)</DateLabel>
          <DateInput
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="დდ / თთ / წწწწ"
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </DateBox>
        <DateBox>
          <Input
            errors={errors}
            register={register}
            labelValue="ლეპტოპის ფასი"
            inputIdValue="laptopPrice"
            placeholderValue="0000"
            registerValue="laptopPrice"
            regex={/^\d+$/}
            regexErrorMessage="გამოიყენე მხოლოდ ციფრები"
            defaultErrorMessage="მხოლოდ ციფრები"
            moneyImage={money}
          />
        </DateBox>
      </TopSideContainer>
      <BottomSideContainer>
        <RadioContainer>
          <RadioErrorBox>
            <RadioLabel errors={errors}>ლეპტოპის მდგომარეობა</RadioLabel>
            {errors.laptopState && (
              <RadioErrorImage src={error} alt="errorImage" />
            )}
          </RadioErrorBox>
          {/*  */}

          <RadioInputWrapper>
            <InputRadio
              radioName="laptopState"
              radioValue="ახალი"
              register={register}
            />
            <InputRadio
              radioName="laptopState"
              radioValue="მეორადი"
              register={register}
            />
          </RadioInputWrapper>
        </RadioContainer>
      </BottomSideContainer>

      <ButtonContainer>
        <PrevButton onClick={() => setStep(1)}>უკან</PrevButton>
        <SubmitButton type="submit" onClick={nextPage}>
          დამახსოვრება
        </SubmitButton>
      </ButtonContainer>
    </ThirdSectionContainer>
  );
}

export default ThirdSection;

const ThirdSectionContainer = styled.section`
  width: 100%;
  border-radius: 12px;
  padding: 24px 16px 48px 16px;
  background-color: var(--container-bg);
  margin-top: 10px;

  @media screen and (min-width: 890px) {
    border-radius: 0px;
    margin-top: 0px;
    padding: 49px 0px 45px 0px;
  }
`;

// top side container styles

const TopSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 890px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 890px) {
    max-width: 407px;
    width: 100%;
  }
`;

const DateLabel = styled.label`
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
`;

const DateInput = styled(DatePicker)`
  height: 60px;
  padding-left: 16px;
  border-radius: var(--border-radius);
  border: 1.8px solid var(--border-color);
  outline: none;
  width: 100%;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  @media screen and (min-width: 890px) {
    max-width: 407px;
    width: 100%;
  }
`;

// bottom side container styles
const BottomSideContainer = styled.div`
  margin-top: 22px;

  @media screen and (min-width: 890px) {
    margin-top: 54px;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioInputWrapper = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 20px;

  @media screen and (min-width: 890px) {
    margin-top: 28px;
  }
`;

const RadioLabel = styled.label<{ errors: FieldErrors<FieldValues> }>`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) =>
    props.errors.laptopState ? "var(--error-color)" : "#000000"};
`;

const RadioErrorBox = styled.div`
  display: flex;
  gap: 15px;
`;

const RadioErrorImage = styled.img`
  width: 21px;
`;

// button container

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;

  @media screen and (min-width: 890px) {
    margin-top: 76px;
  }
`;

const PrevButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.08em;
  color: var(--btn-color);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 162px;
  height: 46px;
  border-radius: var(--border-radius);
  background-color: var(--btn-color);
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--btn-hover-color);
  }

  @media screen and (min-width: 890px) {
    width: 219px;
    height: 60px;
    font-size: 20px;
    line-height: 24px;
  }
`;
