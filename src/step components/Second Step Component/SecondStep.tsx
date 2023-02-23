import { useForm } from "react-hook-form";
import styled from "styled-components";

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
}

function SecondStep({ step, setStep, handlePrev }: SecondStepProps) {
  //
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm();

  const nextPage = (e: any) => {
    e.preventDefault();
    handleSubmit((data) => {
      console.log("data", data);
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
          />

          {/* second section */}
          <SecondSection
            register={register}
            setValue={setValue}
            errors={errors}
            trigger={trigger}
            clearErrors={clearErrors}
            watch={watch}
          />

          {/* third section */}
          <ThirdSection
            errors={errors}
            register={register}
            nextPage={nextPage}
            setStep={setStep}
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
`;
