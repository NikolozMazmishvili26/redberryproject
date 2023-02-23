import { useState } from "react";
import {
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
  FieldErrors,
  UseFormTrigger,
  UseFormClearErrors,
  UseFormWatch,
} from "react-hook-form/dist/types";
import styled from "styled-components";

// import api request
import useGetData, {
  DataProps,
} from "../../../apiRequests/getRequest/useGetData";

// import assets
import error from "../../../assets/error.png";

// import components
import Select from "../../../components/Select Component/Select";
import Input from "../../../components/Input Component/Input";
import InputRadio from "../../../components/Input Radio Component/InputRadio";

// interface
interface SecondSectionProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

// Api Link
const cpuAPI = "https://pcfy.redberryinternship.ge/api/cpus";

function SecondSection({
  clearErrors,
  errors,
  register,
  setValue,
  trigger,
  watch,
}: SecondSectionProps) {
  // get data from backend
  const [cpu, setCpu] = useState<DataProps[]>([]);

  useGetData(cpuAPI, setCpu);

  return (
    <SecondSectionContainer>
      {/* laptop cpu container */}
      <LaptopCpuContainer>
        <CpuSelectContainer>
          <Select
            errors={errors}
            register={register}
            setValue={setValue}
            clearErrors={clearErrors}
            data={cpu}
            selectValue="CPU"
            registerValue="cpu"
          />
        </CpuSelectContainer>

        <CpuContainer>
          <CpuBox>
            <Input
              errors={errors}
              register={register}
              labelValue="CPU-ს ბირთვი"
              inputIdValue="cpuCore"
              placeholderValue="14"
              registerValue="cpuCore"
              regex={/^\d+$/}
              regexErrorMessage="გამოიყენე მხოლოდ ციფრები"
              defaultErrorMessage="მხოლოდ ციფრები"
            />
          </CpuBox>

          <CpuBox>
            <Input
              errors={errors}
              register={register}
              labelValue="CPU-ს ნაკადი"
              inputIdValue="cpuThread"
              placeholderValue="365"
              registerValue="cpuThread"
              regex={/^\d+$/}
              regexErrorMessage="გამოიყენე მხოლოდ ციფრები"
              defaultErrorMessage="მხოლოდ ციფრები"
            />
          </CpuBox>
        </CpuContainer>
      </LaptopCpuContainer>

      {/* laptop memory container */}
      <LaptopMemoryContainer>
        {/*  */}
        <LaptopRamBox>
          <Input
            errors={errors}
            register={register}
            labelValue="ლეპტოპის RAM"
            inputIdValue="laptopRam"
            placeholderValue="16"
            registerValue="laptopRam"
            regex={/^\d+$/}
            regexErrorMessage="მხოლოდ ციფრები"
            defaultErrorMessage="გამოიყენე მხოლოდ ციფრები"
          />
        </LaptopRamBox>
        {/*  */}
        <div>
          <RadioContainer>
            <RadioErrorBox>
              <RadioLabel errors={errors}>მეხსიერების ტიპი</RadioLabel>
              {errors.memoryType && (
                <RadioErrorImage src={error} alt="errorImage" />
              )}
            </RadioErrorBox>
            {/*  */}

            <RadioInputWrapper>
              <InputRadio
                radioName="memoryType"
                radioValue="SSD"
                register={register}
              />
              <InputRadio
                radioName="memoryType"
                radioValue="HDD"
                register={register}
              />
            </RadioInputWrapper>
          </RadioContainer>
        </div>
      </LaptopMemoryContainer>
    </SecondSectionContainer>
  );
}

export default SecondSection;

// second section styles

const SecondSectionContainer = styled.section`
  margin-top: 10px;
  border-radius: 12px;
  padding: 33px 16px 28px 16px;
  background-color: var(--container-bg);

  @media screen and (min-width: 890px) {
    border-radius: 0px;
    margin-top: 0px;
    padding: 49px 0px 0px 0px;

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

const LaptopCpuContainer = styled.div`
  @media screen and (min-width: 890px) {
    display: flex;
    align-items: center;
    /* gap: 24px; */
    justify-content: space-between;
  }
`;

const CpuSelectContainer = styled.div`
  @media screen and (min-width: 890px) {
    max-width: 277px;
    width: 100%;
  }
`;

const CpuContainer = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  grid-column: 400px;

  @media screen and (min-width: 890px) {
    max-width: 576px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-top: 0px;
    gap: 24px;
  }
`;

const CpuBox = styled.div`
  @media screen and (min-width: 890px) {
    width: 276px;
  }
`;

const LaptopMemoryContainer = styled.div`
  margin-top: 22px;

  @media screen and (min-width: 890px) {
    display: flex;
    gap: 62px;
    margin-top: 49px;
  }
`;

const LaptopRamBox = styled.div`
  @media screen and (min-width: 890px) {
    max-width: 407px;
    width: 100%;
  }
`;

// Radio Container Styles

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 23px;

  @media screen and (min-width: 890px) {
    margin-top: 0px;
  }
`;

const RadioInputWrapper = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 26px;
`;

const RadioLabel = styled.label<{ errors: FieldErrors<FieldValues> }>`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) =>
    props.errors.memoryType ? "var(--error-color)" : "#000000"};
`;

const RadioErrorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RadioErrorImage = styled.img`
  width: 22px;
`;
