import FormHeader from './form/FormHeader';
import Input from './form/Input';
import InputSelect from './form/InputSelect';
import InputTitle from './form/InputTitle';

const PatientAddress = () => {
  return (
    <>
      <FormHeader>Patient Address</FormHeader>
      <hr className="divider"></hr>

      <InputTitle>Address</InputTitle>
      <Input></Input>
      <label>Street Address</label>
      <Input></Input>
      <label>Address Line 2</label>
      <div>
        <Input></Input>
        <label>City</label>
        <Input></Input>
        <label>County</label>
      </div>
      <div>
        <Input></Input>
        <label>Eircode</label>
        <InputSelect
          options={[{ label: 'Carrickmines', value: 'Carrickmines' }]}
        ></InputSelect>
        <label>Country</label>
      </div>
    </>
  );
};

export default PatientAddress;
