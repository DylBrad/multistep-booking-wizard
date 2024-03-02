'use client';
import * as React from 'react';
import AppointmentDetails from './components/AppointmentDetails';
import PatientDetails from './components/PatientDetails';
import GpDetails from './components/GpDetails';
import PatientAddress from './components/PatientAddress';
import Consent from './components/Consent';

export default function Home() {
  const [step, setStep] = React.useState(1);

  const progressBarWidth = {
    1: 'w-[20%]',
    2: 'w-[40%]',
    3: 'w-[60%]',
    4: 'w-[80%]',
    5: 'w-full',
  };
  return (
    <div className="App">
      <div className="form-wrapper">
        <div className="navigation">
          <span>Step {step} of 5</span>
          <div className="progress-container">
            <div
              className={`text-xs	 progress ${progressBarWidth[step]}  h-[20px] flex justify-end items-center`}
            >
              {step * 20}%
            </div>
          </div>
        </div>

        {step === 1 && <AppointmentDetails />}
        {step === 2 && <PatientDetails />}
        {step === 3 && <PatientAddress />}
        {step === 4 && <GpDetails />}
        {step === 5 && <Consent />}
      </div>
    </div>
  );
}
