import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
  FieldErrors,
  UseFormTrigger,
  UseFormClearErrors,
} from "react-hook-form/dist/types";

// import api request
import useGetData, {
  DataProps,
} from "../../../apiRequests/getRequest/useGetData";

// import components
import UploadPhoto from "../../../components/Upload Photo Component/UploadPhoto";
import Input from "../../../components/Input Component/Input";
import Select from "../../../components/Select Component/Select";

// interface
interface FirstSectionProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  // localstorage states
  info: Record<string, any>;
  setInfo: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  trigger: UseFormTrigger<FieldValues>;
}

// api link
const laptopBrandAPI = "https://pcfy.redberryinternship.ge/api/brands";

function FirstSection({
  register,
  setValue,
  errors,
  clearErrors,
  // localstorage states
  info,
  setInfo,
  trigger,
}: FirstSectionProps) {
  // get Data from Backend

  const [brands, setBrands] = useState<DataProps[]>([]);
  const [brandId, setBrandId] = useState<number | null>(
    JSON.parse(localStorage.getItem("brandId") || "null")
  );
  useGetData(laptopBrandAPI, setBrands);

  useEffect(() => {
    localStorage.setItem("brandId", JSON.stringify(brandId));
  }, [brandId]);

  return (
    <FirstSectionContainer>
      {/* Upload Photo Component */}
      <UploadPhoto
        register={register}
        setValue={setValue}
        errors={errors}
        info={info}
        setInfo={setInfo}
        trigger={trigger}
      />

      {/* laptop info container */}
      <LaptopInfoContainer>
        <LaptopBox>
          <Input
            errors={errors}
            register={register}
            labelValue="ლეპტოპის სახელი"
            inputIdValue="laptopName"
            placeholderValue="HP"
            registerValue="laptopName"
            regex={/^[a-zA-Z0-9 !@#\$%\^&\*\(\)\_\+=]+$/}
            regexErrorMessage="გამოიყენე ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
            defaultErrorMessage="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
            // localstorage states
            info={info}
            setInfo={setInfo}
            setValue={setValue}
            trigger={trigger}
          />
        </LaptopBox>
        <LaptopBox>
          <Select
            errors={errors}
            register={register}
            setValue={setValue}
            clearErrors={clearErrors}
            data={brands}
            setBrandId={setBrandId}
            selectValue="ლეპტოპის ბრენდი"
            registerValue="laptopBrand"
            // localstorage states
            info={info}
            setInfo={setInfo}
            trigger={trigger}
          />
        </LaptopBox>
      </LaptopInfoContainer>
    </FirstSectionContainer>
  );
}

export default FirstSection;

const FirstSectionContainer = styled.section`
  width: 100%;
  border-radius: 12px;
  padding: 29px 16px 33px 16px;
  background-color: var(--container-bg);

  @media screen and (min-width: 890px) {
    border-radius: 0px;
    padding: 68px 0px 0px 0px;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #c7c7c7;
      display: block;
      margin-top: 52px;
    }
  }
`;

// Laptop Info Container Styles

const LaptopInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
  margin-top: 41px;

  @media screen and (min-width: 890px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 63px;
    margin-top: 50px;
  }
`;

const LaptopBox = styled.div`
  max-width: 878px;
  width: 100%;
`;
