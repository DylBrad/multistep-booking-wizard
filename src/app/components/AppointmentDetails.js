import InputLabel from './form/InputLabel';
import InputSelect from './form/InputSelect';

const AppointmentDetails = () => {
  return (
    <>
      <h2 className="font-bold	text-xl	my-4">Appointment Details</h2>
      <span className="w-full border-t-[1px]"></span>
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
        <textarea />
      </div>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
  );
};

export default AppointmentDetails;
