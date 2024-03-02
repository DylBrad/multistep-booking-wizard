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
  const [isOver16, setIsOver16] = useState(true);
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
          <label>First</label>
          <Input
            type={'text'}
            value={patientFirstName}
            onChange={(value) => updateFormData({ patientFirstName: value })}
          ></Input>
        </div>
        <div className="w-[48%]">
          <label>Last</label>
          <Input
            type={'text'}
            value={patientLastName}
            onChange={(value) => updateFormData({ patientLastName: value })}
          ></Input>
        </div>
      </div>

      <InputTitle>
        Email <span>(Required)</span>
      </InputTitle>

      <div className="flex justify-between">
        <div className="w-[48%]">
          <label>Enter Email</label>
          <Input
            type={'email'}
            value={patientEmail}
            onChange={(value) => updateFormData({ patientEmail: value })}
          ></Input>
        </div>

        <div className="w-[48%]">
          <label>Confirm Email</label>
          <Input
            type={'email'}
            value={patientEmailConfirm}
            onChange={(value) => updateFormData({ patientEmailConfirm: value })}
          ></Input>
        </div>
      </div>
      <div>
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
              checked={isOver16}
              onChange={handleCheckboxChange}
              className="mr-2"
            ></input>{' '}
            <p>Yes, I&apos;m over 16 years old</p>
          </div>
          <div className="my-2 flex text-[11px]">
            <input
              type="checkbox"
              name="under16"
              checked={!isOver16}
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
