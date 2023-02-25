import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form/dist/types/fields";
import {
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form/dist/types/form";

// import components
import SelectDropdownList from "./SelectDropdownList";

// import assets
import arrow from "../../assets/backArrow.png";
import styled from "styled-components";

// imported interfaces
import { DataProps } from "../../apiRequests/getRequest/useGetData";

// interfaces
interface SelectProps {
  errors: FieldValues;
  register: UseFormRegister<FieldValues>;
  selectValue: string;
  registerValue: string;
  setValue: UseFormSetValue<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  data: DataProps[];
  teamId?: number | null;
  setTeamId?: React.Dispatch<React.SetStateAction<number | null>>;
  setPositionId?: React.Dispatch<React.SetStateAction<number | null>>;
  setBrandId?: React.Dispatch<React.SetStateAction<number | null>>;
  // localstorage states
  info: Record<string, any>;
  setInfo: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  trigger: UseFormTrigger<FieldValues>;
}

function Select({
  errors,
  register,
  registerValue,
  selectValue,
  setValue,
  clearErrors,
  data,
  teamId,
  setTeamId,
  setPositionId,
  setBrandId,
  // localstorage states
  info,
  setInfo,
  trigger,
}: SelectProps) {
  // selectbox states
  const [isSelectDropdownOpen, setIsSelectDropdownOpen] = useState(false);
  const [selectboxValue, setSelectboxValue] = useState<string | null>("");

  // selectbox error validation useEffect
  useEffect(() => {
    setValue(registerValue, selectboxValue);
    if (selectboxValue) {
      clearErrors(registerValue);
    }
    // save to local storage
    setInfo({ ...info, [registerValue]: selectboxValue });
  }, [selectboxValue]);

  useEffect(() => {
    const takeValueFromLocalStorage = localStorage.getItem("filledInfo");
    const localStorageValue = takeValueFromLocalStorage
      ? JSON.parse(takeValueFromLocalStorage)[registerValue]
      : "";
    if (takeValueFromLocalStorage) {
      setSelectboxValue(localStorageValue);
      setValue(registerValue, localStorageValue);
    } else {
      setSelectboxValue(""); // set default value if localStorageValue is null or undefined
    }
  }, [setValue, setSelectboxValue, registerValue]);

  // showDropdown Function

  const handleShowDropdown = () => {
    if (registerValue === "positionSelectValue" && teamId) {
      setIsSelectDropdownOpen(!isSelectDropdownOpen);
    } else if (registerValue !== "positionSelectValue") {
      setIsSelectDropdownOpen(!isSelectDropdownOpen);
    }
  };

  return (
    <UserSelectContainer>
      <UserSelect errors={errors} registerValue={registerValue}>
        <SelectValue>
          {selectboxValue ? selectboxValue : selectValue}
        </SelectValue>
        <SelectArrow
          src={arrow}
          alt="arrow"
          onClick={handleShowDropdown}
          isSelectDropdownOpen={isSelectDropdownOpen}
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
              setTeamId={
                setTeamId ||
                (
                  (): React.Dispatch<React.SetStateAction<number | null>> =>
                  (): void => {}
                )()
              }
              setPositionId={setPositionId}
              setBrandId={setBrandId}
              registerValue={registerValue}
            />
          );
        })}
      </SelectDropdown>
      <input
        type="hidden"
        {...register(registerValue, { required: true })}
        value={selectboxValue?.toString() || ""}
      />
    </UserSelectContainer>
  );
}

export default Select;

const UserSelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const UserSelect = styled.div<{ errors: FieldValues; registerValue: string }>`
  width: 100%;
  height: 60px;
  background-color: var(--input-bg-color);
  border-radius: var(--border-radius);
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

const SelectArrow = styled.img<{ isSelectDropdownOpen: boolean }>`
  transition: all 0.2s ease-in;
  transform: ${(props) =>
    props.isSelectDropdownOpen ? "rotate(90deg)" : "rotate(270deg)"};
  cursor: pointer;
`;

const SelectDropdown = styled.div<{ isSelectDropdownOpen: boolean }>`
  position: absolute;
  z-index: 9999;
  width: 100%;
  filter: drop-shadow(0px 4px 34px rgba(0, 0, 0, 0.25));
  border-radius: var(--border-radius);
  background-color: #ffffff;
  max-height: ${(props) => (props.isSelectDropdownOpen ? "300px" : "0px")};
  transition: max-height 0.2s ease-in;
  overflow: hidden;
`;
