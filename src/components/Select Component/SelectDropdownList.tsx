import styled from "styled-components";

interface SelectDropdownListProps {
  name: string;
  id: number;
  setSelectboxValue: React.Dispatch<React.SetStateAction<string | null>>;
  setIsSelectDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTeamId: React.Dispatch<React.SetStateAction<number | null>>;
  setPositionId:
    | React.Dispatch<React.SetStateAction<number | null>>
    | undefined;
  setBrandId: React.Dispatch<React.SetStateAction<number | null>> | undefined;
  registerValue: string;
}

function SelectDropdownList({
  name,
  id,
  setSelectboxValue,
  setIsSelectDropdownOpen,
  setTeamId,
  setPositionId,
  setBrandId,
  registerValue,
}: SelectDropdownListProps) {
  const handleList = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelectboxValue(e.currentTarget.textContent);
    setIsSelectDropdownOpen(false);

    if (registerValue === "teamSelectValue") {
      setTeamId(id);
    }

    if (registerValue === "positionSelectValue") {
      if (setPositionId) {
        setPositionId(id);
      }
    }

    if (registerValue === "laptopBrand") {
      if (setBrandId) {
        setBrandId(id);
      }
    }
  };

  return (
    <DropdownItem>
      <DropdownList onClick={handleList}>{name}</DropdownList>
    </DropdownItem>
  );
}

export default SelectDropdownList;

const DropdownItem = styled.ul``;

const DropdownList = styled.li`
  height: 41px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-decoration: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: var(--hover-color);
  }
`;
