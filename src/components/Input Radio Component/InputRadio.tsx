import {
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form/dist/types";
import styled from "styled-components";

interface InputRadioProps {
  radioName: string;
  radioValue: string;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
}

function InputRadio({ radioName, radioValue, register }: InputRadioProps) {
  return (
    <RadioBox>
      <input
        type="radio"
        id={radioName}
        value={radioValue}
        {...register(radioName, { required: true })}
        name={radioName}
      />
      {radioValue}
    </RadioBox>
  );
}

export default InputRadio;

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  height: 21px;
`;
