import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// testing
import { useForm } from "react-hook-form";

// import components
import FirstStep from "../../step components/First Step Component/FirstStep";
import SecondStep from "../../step components/Second Step Component/SecondStep";

function Create() {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    trigger,
    watch,
    formState: { errors },
  } = useForm();

  //
  const [step, setStep] = useState<number>(1);

  const navigate = useNavigate();

  const handlePrev = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 1) {
      navigate("/");
    }
  };

  // saving values in local storage

  const [info, setInfo] = useState<Record<string, any>>(
    JSON.parse(localStorage.getItem("filledInfo") || "{}")
  );

  useEffect(() => {
    localStorage.setItem("filledInfo", JSON.stringify(info));
  }, [info]);

  // localStorage.clear();

  return (
    <>
      {step === 1 && (
        <FirstStep
          step={step}
          setStep={setStep}
          handlePrev={handlePrev}
          //
          info={info}
          setInfo={setInfo}
          // react-hook-form props
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          clearErrors={clearErrors}
          trigger={trigger}
          errors={errors}
        />
      )}
      {step === 2 && (
        <SecondStep
          step={step}
          setStep={setStep}
          handlePrev={handlePrev}
          //
          info={info}
          setInfo={setInfo}
          // react-hook-form props
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          clearErrors={clearErrors}
          trigger={trigger}
          errors={errors}
          watch={watch}
        />
      )}
    </>
  );
}

export default Create;
