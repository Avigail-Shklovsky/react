import React from 'react'
import '../../style/Indicator.css'

export const Indicatator = ({ currentStep ,maxSteps}) => {
    const numbers = Array.from({ length: maxSteps }, (_, index) => index + 1);

  return (
<div className='stepsContainer flexItems'> 
      {numbers.map(step => (
        <span
          key={step}
          className={`step ${step <= currentStep  ? 'active' : ''}`} 
        >
          {step} 
        </span>
      ))}
    </div>
  )
}
