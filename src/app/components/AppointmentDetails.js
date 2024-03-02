import FormHeader from './form/FormHeader';
import InputTitle from './form/InputTitle';
import InputSelect from './form/InputSelect';

const AppointmentDetails = ({
  appointmentType,
  appointmentLocation,
  description,
  updateFormData,
}) => {
  // const getLocation = () => {
  //   const locationDropdown = document.getElementById('loc');
  //   locationDropdown.addEventListener('change', function () {
  //     const selectedOption = locationDropdown.value;

  //     console.log('Selected option:', selectedOption);
  //     updateFormData({ appointmentLocation: selectedOption });
  //   });
  // };
  return (
    <>
      <FormHeader>Appointment Details</FormHeader>
      <hr className="w-full border-t-[1px]"></hr>
      <div className="dropdown">
        <InputTitle>Appointment Type</InputTitle>
        <InputSelect
          id="appType"
          options={[
            { label: '', value: '' },
            { label: 'Dermatology', value: 'Dermatology' },
          ]}
          value={appointmentType}
          updateFormData={updateFormData}
          field={'appointmentType'}
        ></InputSelect>
      </div>
      <div className="dropdown">
        <InputTitle>Preferred Location</InputTitle>
        <InputSelect
          id="loc"
          options={[
            { label: '', value: '' },
            { label: 'Carrickmines', value: 'Carrickmines' },
          ]}
          value={appointmentLocation}
          updateFormData={updateFormData}
          field={'appointmentLocation'}
          // onChange={getLocation}
        ></InputSelect>
      </div>
      <div className="textarea">
        <InputTitle>Describe your skin issue</InputTitle>
        <textarea
          required
          value={description}
          className="w-full h-[100px]"
          onChange={(e) => updateFormData({ description: e.target.value })}
        />
      </div>
    </>
  );
};

export default AppointmentDetails;
