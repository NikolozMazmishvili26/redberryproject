import { useEffect } from "react";
import {
  RegisterOptions,
  UseFormRegisterReturn,
  UseFormSetValue,
  FieldValues,
} from "react-hook-form/dist/types";
import styled from "styled-components";

interface InputRadioProps {
  radioName: string;
  radioValue: string;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  // localstorage states
  info: Record<string, any>;
  setInfo: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  setValue: UseFormSetValue<FieldValues>;
  trigger: UseFormSetValue<FieldValues>;
}

function InputRadio({
  radioName,
  radioValue,
  register,
  info,
  setInfo,
  setValue,
  trigger,
}: InputRadioProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInfo({ ...info, [radioName]: value });
    trigger(radioName, value);
  };

  useEffect(() => {
    setValue(radioName, info[radioName]);
  }, [info[radioName]]);

  return (
    <RadioBox>
      <input
        type="radio"
        id={radioName}
        value={radioValue}
        {...register(radioName, { required: true })}
        name={radioName}
        onChange={handleChange}
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
