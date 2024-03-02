import * as React from 'react';
import FormHeader from './form/FormHeader';

const Consent = ({
  constentAppointmentProccess,
  constentPrivacyPolicy,
  constentDataSharing,
  updateFormData,
}) => {
  const [appointmentProccess, setAppointmentProcess] = React.useState(false);
  const [privacyPolicy, setPrivacyPolicy] = React.useState(false);
  const [dataSharing, setDataSharing] = React.useState(false);

  const handleAppointmentProccessChange = (e) => {
    const newValue = e.target.checked;
    setAppointmentProcess(newValue);
    updateFormData({ constentAppointmentProccess: newValue });
  };

  const handlePrivacyPolicyChange = (e) => {
    const newValue = e.target.checked;
    setPrivacyPolicy(newValue);
    updateFormData({ constentPrivacyPolicy: newValue });
  };

  const handleDataSharingChange = (e) => {
    const newValue = e.target.checked;
    setDataSharing(newValue);
    updateFormData({ constentDataSharing: newValue });
  };

  return (
    <>
      <FormHeader>Consent</FormHeader>
      <hr className="divider"></hr>

      <div className="my-2 flex text-[11px]">
        <input
          type="checkbox"
          className="mr-2"
          name="appointmentProccess"
          checked={appointmentProccess === true}
          onChange={handleAppointmentProccessChange}
        ></input>
        <p>
          Please confirm that you understand the{' '}
          <span className="text-cyan-400 underline">Appointment Proccess</span>
        </p>
      </div>
      <div className="my-2 flex text-[11px]">
        <input
          type="checkbox"
          className="mr-2"
          name="PrivacyPolicy"
          checked={privacyPolicy === true}
          onChange={handlePrivacyPolicyChange}
        ></input>
        <p>
          By submitting to this form, you are agreeing to our{' '}
          <span className="text-cyan-400 underline">Privacy Policy</span>
        </p>
      </div>
      <div className="my-2 flex text-[11px]">
        <input
          type="checkbox"
          className="mr-2"
          name="dataSharing"
          checked={dataSharing === true}
          onChange={handleDataSharingChange}
        ></input>
        <p>Consent to sharing your data with VHI healthcare</p>
      </div>

      <p className="text-[11px]">
        AllView Healthcare and VHI Healthcare are two separate entities involved
        in the provision of this healthcare service. As part of your medical
        treatment, it may be necessary to share you personal and medical
        information between these two companies to ensure the continuity and
        quality of your care.
      </p>
    </>
  );
};

export default Consent;
