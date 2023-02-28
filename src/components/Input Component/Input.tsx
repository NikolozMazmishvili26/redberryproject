import { KeyboardEventHandler, useEffect } from "react";
import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form/dist/types";
import styled from "styled-components";

interface InputProps {
  errors: FieldValues;
  register: UseFormRegister<FieldValues>;
  labelValue: string;
  inputIdValue: string;
  placeholderValue: string;
  registerValue: string;
  regex: RegExp;
  regexErrorMessage: string;
  defaultErrorMessage: string;
  moneyImage?: string;
  // localstorage states
  info: Record<string, any>;
  setInfo: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  setValue: UseFormSetValue<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
}

function Input({
  errors,
  register,
  inputIdValue,
  labelValue,
  placeholderValue,
  registerValue,
  regex,
  regexErrorMessage,
  defaultErrorMessage,
  moneyImage,
  // localstorage states
  info,
  setInfo,
  setValue,
  trigger,
}: InputProps) {
  // register values without min length
  const registerValuesWithoutMinLength =
    registerValue !== "email" &&
    registerValue !== "phoneNumber" &&
    registerValue !== "laptopName" &&
    registerValue !== "cpuCore" &&
    registerValue !== "cpuThread" &&
    registerValue !== "laptopRam" &&
    registerValue !== "laptopPrice";

  // localstorage for input

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    setValue(name, value); // Set the new value
    await trigger(name); // Trigger the validation
  };

  useEffect(() => {
    const takeValueFromLocalStorage = localStorage.getItem("filledInfo");
    const localStorageValue = takeValueFromLocalStorage
      ? JSON.parse(takeValueFromLocalStorage)[registerValue]
      : "";
    if (takeValueFromLocalStorage) {
      setValue(registerValue, localStorageValue);
    }
  }, [setValue]);

  // avoid in phoneNumber space function

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const key = e.charCode;
    if (
      (registerValue === "phoneNumber" ||
        registerValue === "cpuThread" ||
        registerValue === "cpuCore" ||
        registerValue === "laptopRam" ||
        registerValue === "laptopPrice") &&
      key === 32
    ) {
      e.preventDefault();
    }
  };

  return (
    <>
      {" "}
      <Label
        htmlFor={inputIdValue}
        errors={errors}
        registerValue={registerValue}
      >
        {labelValue}
      </Label>
      <InputContainer>
        <UserInput
          id={inputIdValue}
          placeholder={placeholderValue}
          // props
          errors={errors}
          registerValue={registerValue}
          {...register(registerValue, {
            required: {
              value: true,
              message: "მოცემული ველი სავალდებულია!",
            },
            ...(registerValuesWithoutMinLength && {
              minLength: { message: "გამოიყენე მინიმუმ 2 სიმბოლო", value: 2 },
            }),

            pattern: {
              value: regex,
              message: regexErrorMessage,
            },
          })}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {registerValue === "laptopPrice" && (
          <MoneyImage src={moneyImage} alt="moneyImg" />
        )}
      </InputContainer>
      <ErrorMessage errors={errors} registerValue={registerValue}>
        {errors[registerValue]
          ? errors[registerValue].message
          : defaultErrorMessage}
      </ErrorMessage>
    </>
  );
}

export default Input;

const Label = styled.label<{ errors: FieldValues; registerValue: string }>`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) =>
    props.errors[props.registerValue]
      ? "var(--error-color)"
      : "var(--label-color)"};
`;

const UserInput = styled.input<{ errors: FieldValues; registerValue: string }>`
  width: 100%;
  margin-top: 8px;
  height: 60px;
  padding-left: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: var(--placeholder-color);
  border-radius: var(--border-radius);
  border: ${(props) =>
    props.errors[props.registerValue]
      ? "1.8px solid var(--error-color)"
      : "1.8px solid var(--border-color)"};
  outline: none;
  color: #000000;
`;
const ErrorMessage = styled.p<{ errors: FieldValues; registerValue: string }>`
  margin-top: 8px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) =>
    props.errors[props.registerValue]
      ? "var(--error-color)"
      : "color: #2e2e2e;"};
`;

//

const InputContainer = styled.div`
  position: relative;
`;

const MoneyImage = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 13px;
  height: 16px;
  object-fit: cover;

  @media screen and (min-width: 890px) {
    width: 18px;
    height: 21px;
  }
`;
