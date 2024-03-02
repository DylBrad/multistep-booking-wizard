import FormHeader from './form/FormHeader';
import Input from './form/Input';
import InputTitle from './form/InputTitle';

const ADDRESS = {
  streetAddress: '',
  streetAddress2: '',
  city: '',
  county: '',
  eircode: '',
  country: '',
};

const options = [
  { label: '', value: '' },
  { label: 'Ireland', value: 'Ireland' },
];

const PatientAddress = ({ updateFormData, patientAddress }) => {
  const handleChange = (field, value) => {
    updateFormData({ patientAddress: { ...patientAddress, [field]: value } });
  };

  const captureData = (e) => {
    const selectedOption = e.target.value;
    handleChange('country', selectedOption);
  };

  return (
    <>
      <FormHeader>Patient Address</FormHeader>
      <hr className="divider"></hr>

      <InputTitle>Address</InputTitle>
      <Input
        type={'text'}
        value={patientAddress.streetAddress}
        onChange={(value) => handleChange('streetAddress', value)}
      ></Input>
      <label>Street Address</label>
      <Input
        type={'text'}
        value={patientAddress.streetAddress2}
        onChange={(value) => handleChange('streetAddress2', value)}
      ></Input>
      <label>Address Line 2</label>
      <div>
        <Input
          type={'text'}
          value={patientAddress.city}
          onChange={(value) => handleChange('city', value)}
        ></Input>
        <label>City</label>
        <Input
          type={'text'}
          value={patientAddress.county}
          onChange={(value) => handleChange('county', value)}
        ></Input>
        <label>County</label>
      </div>
      <div>
        <Input
          type={'text'}
          value={patientAddress.eircode}
          onChange={(value) => handleChange('eircode', value)}
        ></Input>
        <label>Eircode</label>

        <select
          required
          id="country"
          value={patientAddress.country}
          onChange={captureData}
          className="text-sm my-1 text-zinc-400 w-full p-2"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label>Country</label>
      </div>
    </>
  );
};

export default PatientAddress;
