import FormHeader from './form/FormHeader';
import InputTitle from './form/InputTitle';
import InputSelect from './form/InputSelect';

// import { useForm } from 'react-hook-form';

const AppointmentDetails = () => {
  return (
    <>
      <FormHeader>Appointment Details</FormHeader>
      <hr className="w-full border-t-[1px]"></hr>
      <div className="dropdown">
        <InputTitle>Appointment Type</InputTitle>
        <InputSelect
          required
          options={[{ label: 'Dermatology', value: 'Dermatology' }]}
        ></InputSelect>
      </div>
      <div className="dropdown">
        <InputTitle>Preferred Location</InputTitle>
        <InputSelect
          options={[{ label: 'Carrickmines', value: 'Carrickmines' }]}
        ></InputSelect>
      </div>
      <div className="textarea">
        <InputTitle>Describe your skin issue</InputTitle>
        <textarea required className="w-full h-[100px]" />
      </div>
    </>
  );
};

export default AppointmentDetails;
