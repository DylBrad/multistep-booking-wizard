import FormHeader from './form/FormHeader';
import InputLabel from './form/InputLabel';
import InputSelect from './form/InputSelect';
import Button from './form/Button';

const AppointmentDetails = () => {
  return (
    <>
      <FormHeader>Appointment Details</FormHeader>
      <hr className="w-full border-t-[1px]"></hr>
      <div className="dropdown">
        <InputLabel>Appointment Type</InputLabel>
        <InputSelect
          options={[{ label: 'Dermatology', value: 'Dermatology' }]}
        ></InputSelect>
      </div>
      <div className="dropdown">
        <InputLabel>Preferred Location</InputLabel>
        <InputSelect
          options={[{ label: 'Carrickmines', value: 'Carrickmines' }]}
        ></InputSelect>
      </div>
      <div className="textarea">
        <InputLabel>Describe your skin issue</InputLabel>
        <textarea className="w-full h-[100px]" />
      </div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </>
  );
};

export default AppointmentDetails;
