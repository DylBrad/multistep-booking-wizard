import * as React from 'react';
import FormHeader from './form/FormHeader';
import Input from './form/Input';
import InputTitle from './form/InputTitle';

const GpDetails = ({
  updateFormData,
  gpFirstName,
  gpLastName,
  gpAddress,
  medicalInsurer,
  vhiPolicyNumber,
}) => {
  const [selectedMedicalInsurer, setSelectedMedicalInsurer] =
    React.useState(medicalInsurer);

  const handleRadioSelect = (insurer) => {
    setSelectedMedicalInsurer(insurer);
    updateFormData({ medicalInsurer: insurer });
  };
  return (
    <>
      <FormHeader>GP Contact Details</FormHeader>
      <hr className="divider"></hr>
      <div>
        <InputTitle>GP Name</InputTitle>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              type={'text'}
              value={gpFirstName}
              onChange={(value) => updateFormData({ gpFirstName: value })}
            />
            <label>First</label>
          </div>
          <div>
            <Input
              type={'text'}
              value={gpLastName}
              onChange={(value) => updateFormData({ gpLastName: value })}
            />
            <label>Last</label>
          </div>
        </div>
      </div>
      <div className="textarea">
        <InputTitle>GP Clinic Address</InputTitle>
        <textarea
          required
          value={gpAddress}
          onChange={(e) => updateFormData({ gpAddress: e.target.value })}
          className="w-full h-[100px]"
        />
      </div>

      <FormHeader>Medical Insurance Details</FormHeader>
      <hr className="divider"></hr>

      <span className="divider"></span>
      <div className="gp-radios flex flex-col">
        <InputTitle>Medical Insurer</InputTitle>
        <div>
          <input
            type="radio"
            id="vhi"
            checked={selectedMedicalInsurer === 'vhi'}
            onChange={() => handleRadioSelect('vhi')}
            className="mr-2"
          ></input>
          <label id="vhi">VHI Healthcare</label>
        </div>{' '}
        <div>
          <input
            type="radio"
            id="irish-life"
            checked={selectedMedicalInsurer === 'irish-life'}
            onChange={() => handleRadioSelect('irish-life')}
            className="mr-2"
          ></input>
          <label id="irish-life">Irish Life Health</label>
        </div>{' '}
        <div>
          <input
            type="radio"
            id="laya"
            checked={selectedMedicalInsurer === 'laya'}
            onChange={() => handleRadioSelect('laya')}
            className="mr-2"
          ></input>
          <label id="laya">Laya Healthcare</label>
        </div>{' '}
        <div>
          <input
            type="radio"
            id="other"
            checked={selectedMedicalInsurer === 'other'}
            onChange={() => handleRadioSelect('other')}
            className="mr-2"
          ></input>
          <label>Other</label>
        </div>{' '}
        <div>
          <input
            type="radio"
            id="none"
            checked={selectedMedicalInsurer === 'none'}
            onChange={() => handleRadioSelect('none')}
            className="mr-2"
          ></input>
          <label id="none">None</label>
        </div>
      </div>
      <div className="mb-[20px]">
        <InputTitle>VHI Policy Number</InputTitle>
        <Input
          type={'text'}
          value={vhiPolicyNumber}
          onChange={(value) => updateFormData({ vhiPolicyNumber: value })}
        ></Input>
      </div>
    </>
  );
};

export default GpDetails;
