'use client';
import * as React from 'react';
import AppointmentDetails from './components/AppointmentDetails';
import PatientDetails from './components/PatientDetails';
import GpDetails from './components/GpDetails';
import PatientAddress from './components/PatientAddress';
import Consent from './components/Consent';
import Button from './components/form/Button';

const FORM_DATA = {
  appointmentType: '',
  appointmentLocation: '',
  description: '',
  patientFirstName: '',
  patientLastName: '',
  patientEmail: '',
  patientPhone: '',
  patientDOB: '',
  patientOver16: null,
  patientAddress: '',
  gpFirstName: '',
  gpLastName: '',
  gpAddress: '',
  medicalInsurer: '',
  vhiPolicyNumber: '',
  constentAppointmentProccess: null,
  constentPrivacyPolicy: null,
  constentDataSharing: null,
};

export default function Home() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState(FORM_DATA);

  const progressBarWidth = {
    1: 'w-[20%]',
    2: 'w-[40%]',
    3: 'w-[60%]',
    4: 'w-[80%]',
    5: 'w-full',
  };

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setStep(step - 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    goToNextStep();
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
        <form onSubmit={onSubmit}>
          {step === 1 && <AppointmentDetails goToNextStep={goToNextStep} />}
          {step === 2 && <PatientDetails />}
          {step === 3 && <PatientAddress />}
          {step === 4 && <GpDetails />}
          {step === 5 && <Consent />}
          <div>
            {step > 1 && (
              <Button
                type="button"
                bg={'bg-cyan-400'}
                onClick={goToPreviousStep}
              >
                Previous
              </Button>
            )}
            {step < 5 && (
              <Button type="submit" bg={'bg-blue-900'}>
                Next
              </Button>
            )}
            {step === 5 && (
              <Button type="submit" bg={'bg-blue-900'}>
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
