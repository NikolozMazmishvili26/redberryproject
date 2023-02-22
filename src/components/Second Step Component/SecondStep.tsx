import { useForm } from "react-hook-form";
import styled from "styled-components";

// import components
import Header from "../Header Component/Header";
import UploadPhoto from "../Upload Photo Component/UploadPhoto";

interface SecondStepProps {
  step: number;
  handlePrev: () => void;
}

function SecondStep({ step, handlePrev }: SecondStepProps) {
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
      console.log("ra modis", data);
    })();
  };

  console.log("err", errors);

  return (
    <>
      <Header step={step} handlePrev={handlePrev} />
      <Form onSubmit={nextPage}>
        <SecondStepContainer>
          <FirstSection>
            {/* Upload Photo Component */}
            <UploadPhoto
              register={register}
              setValue={setValue}
              errors={errors}
              trigger={trigger}
              clearErrors={clearErrors}
              watch={watch}
            />
          </FirstSection>
        </SecondStepContainer>
        {/* Submit Button */}
        <button type="submit" onClick={nextPage}>
          დამახსოვრება
        </button>
      </Form>
    </>
  );
}

export default SecondStep;

const SecondStepContainer = styled.div`
  max-width: 1226px;
  width: 100%;
  background-color: var(--container-bg);
  border-radius: 12px 12px 0px 0px;
  margin: 11px auto;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 890px) {
    margin-top: 27px;
  }
`;

const FirstSection = styled.section`
  width: 100%;
  padding: 29px 16px 33px 16px;

  @media screen and (min-width: 890px) {
    padding-top: 68px;
    padding-bottom: 52px;
  }
`;

const Form = styled.form``;
