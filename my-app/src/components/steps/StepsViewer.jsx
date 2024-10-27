import React, {useState} from 'react'
import { Indicatator } from './Indicatator'

export const StepsViewer = () => {
    const [currentStep, setCurrentStep] = useState(-1);
    const maxSteps = 15; 

    const handleNext = () => {
        setCurrentStep((prevStep) => (prevStep < maxSteps ? prevStep + 1 : prevStep)); 
      };
    
      const handlePrevious = () => {
        setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep)); 
      };

  return (
   <div className='container' >
    <button className='prevnext' onClick={handlePrevious}>Previuos</button>
    <button className='prevnext' onClick={handleNext}>Next</button>
    <Indicatator currentStep={currentStep} maxSteps={maxSteps}/>
   </div>
  )
}
