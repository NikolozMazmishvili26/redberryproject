import React from "react";
import Header from "../Header Component/Header";

interface SecondStepProps {
  step: number;
  handlePrev: () => void;
}

function SecondStep({ step, handlePrev }: SecondStepProps) {
  return <Header step={step} handlePrev={handlePrev} />;
}

export default SecondStep;
