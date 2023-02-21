import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";
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
}: InputProps) {
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
          minLength: {
            value: 2,
            message: "გამოიყენე მინიმუმ 2 სიმბოლო",
          },
          pattern: {
            value: regex,
            message: regexErrorMessage,
          },
        })}
      />
      <ErrorMessage errors={errors} registerValue={registerValue}>
        {errors[registerValue]
          ? errors[registerValue].message
          : "მინიმუმ 2 სიმბოლო, ქართული ასოები"}
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
  border-radius: 8px;
  border: ${(props) =>
    props.errors[props.registerValue]
      ? "1.8px solid var(--error-color)"
      : "1.8px solid var(--border-color)"};
  outline: none;
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
