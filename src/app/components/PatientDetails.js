import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import FormHeader from './form/FormHeader';
import InputTitle from './form/InputTitle';
import Input from './form/Input';

const PatientDetails = ({
  patientFirstName,
  patientLastName,
  patientEmail,
  patientEmailConfirm,
  patientPhone,
  patientDOB,
  patientOver16,
  updateFormData,
}) => {
  const [isOver16, setIsOver16] = useState(null);
  const [emailIsMatched, setEmailIsMatched] = useState(true);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    console.log(newValue.endDate);

    setValue(newValue);
    updateFormData({ patientDOB: newValue.endDate });
  };

  const handleEmailChange = (value) => {
    updateFormData({ patientEmail: value });

    checkEmailConfirmation(patientEmailConfirm, value);
  };

  const handleEmailConfirmation = (value) => {
    updateFormData({ patientEmailConfirm: value });

    checkEmailConfirmation(value, patientEmail);
  };

  const checkEmailConfirmation = (email1, email2) => {
    if (email1 === email2) {
      setEmailIsMatched(true);
    } else {
      setEmailIsMatched(false);
    }
  };

  const handleCheckboxChange = (e) => {
    const newValue = e.target.checked;
    if (e.target.name === 'over16') {
      setIsOver16(newValue);
      updateFormData({ patientOver16: newValue });
    } else {
      setIsOver16(!newValue);
      updateFormData({ patientOver16: !newValue });
    }
  };

  return (
    <>
      <FormHeader>Patient Contact Details</FormHeader>
      <hr className="divider"></hr>
      <InputTitle>Name</InputTitle>

      <div className="flex justify-between">
        <div className="w-[48%]">
          <Input
            type={'text'}
            value={patientFirstName}
            onChange={(value) => updateFormData({ patientFirstName: value })}
          ></Input>{' '}
          <label>First</label>
        </div>
        <div className="w-[48%]">
          <Input
            type={'text'}
            value={patientLastName}
            onChange={(value) => updateFormData({ patientLastName: value })}
          ></Input>{' '}
          <label>Last</label>
        </div>
      </div>

      <InputTitle>
        Email <span>(Required)</span>
      </InputTitle>
      {!emailIsMatched && (
        <span className="text-red-500	">
          Emails do not match. Check email is correct.
        </span>
      )}

      <div className="flex justify-between">
        <div className="w-[48%]">
          <Input
            type={'email'}
            value={patientEmail}
            onChange={(value) => handleEmailChange(value)}
          ></Input>{' '}
          <label>Enter Email</label>
        </div>

        <div className="w-[48%]">
          <Input
            type={'email'}
            value={patientEmailConfirm}
            onChange={(value) => handleEmailConfirmation(value)}
          ></Input>{' '}
          <label>Confirm Email</label>
        </div>
      </div>

      <div className="mb-[16px]">
        <InputTitle>Phone</InputTitle>
        <Input
          type={'number'}
          value={patientPhone}
          onChange={(value) => updateFormData({ patientPhone: value })}
        ></Input>
      </div>
      <div className="flex justify-between	">
        <div className="w-[48%]">
          <InputTitle>Date Of Birth</InputTitle>
          <div>
            <Datepicker
              useRange={false}
              startFrom={new Date('1900-01-01')}
              primaryColor={'cyan'}
              value={value}
              onChange={handleValueChange}
              showShortcuts={true}
              asSingle={true}
            />
          </div>
        </div>
        <div className="w-[48%]">
          <InputTitle>
            Over 16 years old? <span>(Required)</span>
          </InputTitle>
          <div className="my-2 flex text-[11px]">
            <input
              type="checkbox"
              name="over16"
              checked={isOver16 === true}
              onChange={handleCheckboxChange}
              className="mr-2"
            ></input>{' '}
            <p>Yes, I&apos;m over 16 years old</p>
          </div>
          <div className="my-2 flex text-[11px]">
            <input
              type="checkbox"
              name="under16"
              checked={isOver16 === false}
              onChange={handleCheckboxChange}
              className="mr-2"
            ></input>{' '}
            <p>The patient is less than 16 years old</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
