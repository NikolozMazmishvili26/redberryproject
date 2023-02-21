import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form/dist/types/fields";
import {
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form/dist/types/form";

// import components
import SelectDropdownList from "../First Step Component/SelectDropdownList";

// import assets
import arrow from "../../assets/backArrow.png";
import styled from "styled-components";

// imported interfaces
import { DataProps } from "../First Step Component/FirstStep";

// interfaces
interface SelectProps {
  errors: FieldValues;
  register: UseFormRegister<FieldValues>;
  selectValue: string;
  registerValue: string;
  setValue: UseFormSetValue<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  data: DataProps[];
  setTeamId: React.Dispatch<React.SetStateAction<number | null>>;
}

function Select({
  errors,
  register,
  registerValue,
  selectValue,
  setValue,
  clearErrors,
  data,
  setTeamId,
}: SelectProps) {
  // selectbox states
  const [isSelectDropdownOpen, setIsSelectDropdownOpen] = useState(false);
  const [selectboxValue, setSelectboxValue] = useState<string | null>(null);

  // selectbox error validation useEffect
  useEffect(() => {
    setValue(registerValue, selectboxValue);
    if (selectboxValue) {
      clearErrors(registerValue);
    }
  }, [selectboxValue]);

  return (
    <>
      <UserSelect errors={errors} registerValue={registerValue}>
        <SelectValue>
          {selectboxValue ? selectboxValue : selectValue}
        </SelectValue>
        <SelectArrow
          src={arrow}
          alt="arrow"
          onClick={() => setIsSelectDropdownOpen(!isSelectDropdownOpen)}
        />
      </UserSelect>
      <SelectDropdown isSelectDropdownOpen={isSelectDropdownOpen}>
        {data.map((list: DataProps) => {
          return (
            <SelectDropdownList
              key={list.id}
              id={list.id}
              name={list.name}
              setSelectboxValue={setSelectboxValue}
              setIsSelectDropdownOpen={setIsSelectDropdownOpen}
              setTeamId={setTeamId}
              registerValue={registerValue}
            />
          );
        })}
      </SelectDropdown>
      <input
        type="hidden"
        {...register(registerValue, { required: true })}
        value={selectboxValue?.toString()}
      />
    </>
  );
}

export default Select;

const UserSelect = styled.div<{ errors: FieldValues; registerValue: string }>`
  width: 100%;
  height: 60px;
  background-color: var(--input-bg-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 22.86px;
  border: ${(props) =>
    props.errors[props.registerValue] && "1.8px solid #E52F2F"};
`;

const SelectValue = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: var(--label-color);
  letter-spacing: 0.04em;
`;

const SelectArrow = styled.img`
  transform: rotate(270deg);
  cursor: pointer;
`;

const SelectDropdown = styled.div<{ isSelectDropdownOpen: boolean }>`
  width: 100%;
  filter: drop-shadow(0px 4px 34px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  background-color: #ffffff;
  max-height: ${(props) => (props.isSelectDropdownOpen ? "100%" : "0")};
  overflow: hidden;
`;