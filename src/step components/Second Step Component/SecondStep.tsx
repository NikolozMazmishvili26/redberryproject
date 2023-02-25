import styled from "styled-components";
import axios from "axios";
import {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormClearErrors,
  UseFormTrigger,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form/dist/types";

// import assets
import logo from "../../assets/logo2.png";

// import components
import Header from "../../components/Header Component/Header";
import FirstSection from "./Section Components/FirstSection";
import SecondSection from "./Section Components/SecondSection";
import ThirdSection from "./Section Components/ThirdSection";

interface SecondStepProps {
  step: number;
  handlePrev: () => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  // localstorage states
  info: Record<string, any>;
  setInfo: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  // react-hook-form props
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

function SecondStep({
  step,
  setStep,
  handlePrev,
  // localstorage states
  info,
  setInfo,
  // react-hook-form props
  clearErrors,
  errors,
  handleSubmit,
  register,
  setValue,
  trigger,
  watch,
}: SecondStepProps) {
  // parse localstorage value to int function
  function parseLocalStorageInt(key: string): number | undefined {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return parseInt(value);
    }
    return undefined;
  }
  const teamId = parseLocalStorageInt("teamId");
  const positionId = parseLocalStorageInt("positionId");
  const brandId = parseLocalStorageInt("brandId");

  // -------------------------------------------------------------------------------
  //  post request
  const token = "323762cb61990e16562a59d00dd70162";

  const nextPage = (e: any) => {
    e.preventDefault();

    handleSubmit((data) => {
      //
      if (data.laptopState === "ახალი") {
        data.laptopState = "new";
      } else if (data.laptopState === "მეორადი") {
        data.laptopState = "used";
      }

      //

      axios
        .post(
          "https://pcfy.redberryinternship.ge/api/laptop/create/",
          {
            name: data.firstName,
            surname: data.lastName,
            team_id: teamId !== undefined ? teamId : 0,
            position_id: positionId !== undefined ? positionId : 0,
            phone_number: data.phoneNumber,
            email: data.email,
            token: token,
            laptop_name: data.laptopName,
            laptop_image: data.fileUpload,
            laptop_brand_id: brandId !== undefined ? brandId : 0,
            laptop_cpu: data.cpu,
            laptop_cpu_cores: data.cpuCore,
            laptop_cpu_threads: data.cpuThread,
            laptop_ram: data.laptopRam,
            laptop_hard_drive_type: data.memoryType,
            laptop_state: data.laptopState,
            laptop_price: data.laptopPrice,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    })();
  };

  return (
    <>
      <Header step={step} handlePrev={handlePrev} setStep={setStep} />
      <SecondStepContainer>
        <Form onSubmit={nextPage}>
          {/* first section */}
          <FirstSection
            register={register}
            setValue={setValue}
            errors={errors}
            clearErrors={clearErrors}
            // localstorage states
            info={info}
            setInfo={setInfo}
            trigger={trigger}
          />

          {/* second section */}
          <SecondSection
            register={register}
            setValue={setValue}
            errors={errors}
            clearErrors={clearErrors}
            watch={watch}
            // localstorage states
            info={info}
            setInfo={setInfo}
            trigger={trigger}
          />

          {/* third section */}
          <ThirdSection
            errors={errors}
            register={register}
            nextPage={nextPage}
            setStep={setStep}
            // localstorage states
            info={info}
            setInfo={setInfo}
            trigger={trigger}
            setValue={setValue}
          />
        </Form>
      </SecondStepContainer>
      {/* logo */}
      <LogoImage src={logo} alt="logo" />
    </>
  );
}

export default SecondStep;

const SecondStepContainer = styled.div`
  max-width: 1226px;
  width: 100%;
  background-color: var(--container-bg);
  margin: 11px auto;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 890px) {
    border-radius: 18px;
    margin-top: 25px;
  }
`;

const Form = styled.form`
  max-width: 878px;
  width: 100%;
  background: #f7f7f7;
`;

const LogoImage = styled.img`
  display: flex;
  margin: auto;
  margin-top: 56px;
  margin-bottom: 52px;

  @media screen and (max-width: 890px) {
    display: none;
  }
`;
