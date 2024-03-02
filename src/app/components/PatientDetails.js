import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import FormHeader from './form/FormHeader';
import InputTitle from './form/InputTitle';
import Input from './form/Input';

const PatientDetails = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setValue(newValue);
  };

  return (
    <>
      <FormHeader>Patient Contact Details</FormHeader>
      <hr className="divider"></hr>
      <InputTitle>Name</InputTitle>

      <div className="flex justify-between">
        <div className="w-[48%]">
          <label>First</label>
          <Input></Input>
        </div>
        <div className="w-[48%]">
          <label>Last</label>
          <Input></Input>
        </div>
      </div>

      <InputTitle>
        Email <span>(Required)</span>
      </InputTitle>

      <div className="flex justify-between">
        <div className="w-[48%]">
          <label>Enter Email</label>
          <Input></Input>
        </div>

        <div className="w-[48%]">
          <label>Confirm Email</label>
          <Input></Input>
        </div>
      </div>
      <div>
        <InputTitle>Phone</InputTitle>
        <Input></Input>
      </div>
      <div className="flex justify-between	">
        <div className="w-[48%]">
          <InputTitle>Date Of Birth</InputTitle>
          <div>
            <Datepicker
              primaryColor={'cyan'}
              value={value}
              onChange={handleValueChange}
              showShortcuts={true}
            />
          </div>
        </div>
        <div className="w-[48%]">
          <InputTitle>
            Over 16 years old? <span>(Required)</span>
          </InputTitle>
          <div className="my-2 flex text-[11px]">
            <input type="checkbox" className="mr-2"></input>
            <p>Yes, I&apos;m over 16 years old</p>
          </div>
          <div className="my-2 flex text-[11px]">
            <input type="checkbox" className="mr-2"></input>
            <p>The patient is less than 16 years old</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
