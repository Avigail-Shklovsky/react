import React, { useState } from 'react'
import { Indicatator } from './Indicatator'

export const StepsViewer = ({ maxSteps }) => {
  const [currentStep, setCurrentStep] = useState(-1);

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep < maxSteps ? prevStep + 1 : prevStep));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div className='container' >
      <button onClick={handlePrevious} disabled={currentStep === 0}>Previuos</button>
      <button onClick={handleNext} disabled={currentStep === maxSteps}>Next</button>
      <Indicatator currentStep={currentStep} maxSteps={maxSteps} />
    </div>
  )
}
