import { useNavigate } from "react-router-dom";
import { useState } from "react";

// import components
import FirstStep from "../../components/First Step Component/FirstStep";
import SecondStep from "../../components/Second Step Component/SecondStep";

function Create() {
  const [step, setStep] = useState<number>(2);

  const navigate = useNavigate();

  const handlePrev = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 1) {
      navigate("/");
    }
  };

  return (
    <>
      {step === 1 && (
        <FirstStep step={step} setStep={setStep} handlePrev={handlePrev} />
      )}
      {step === 2 && <SecondStep step={step} handlePrev={handlePrev} />}
    </>
  );
}

export default Create;
