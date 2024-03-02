import FormHeader from './form/FormHeader';
import InputTitle from './form/InputTitle';
import InputSelect from './form/InputSelect';

const AppointmentDetails = () => {
  return (
    <>
      <FormHeader>Appointment Details</FormHeader>
      <hr className="w-full border-t-[1px]"></hr>
      <div className="dropdown">
        <InputTitle>Appointment Type</InputTitle>
        <InputSelect
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
        <textarea className="w-full h-[100px]" />
      </div>
    </>
  );
};

export default AppointmentDetails;
