import FormHeader from './form/FormHeader';

const Consent = () => {
  return (
    <>
      <FormHeader>Consent</FormHeader>
      <hr className="divider"></hr>

      <div className="my-2 flex text-[11px]">
        <input type="checkbox" className="mr-2"></input>
        <p>
          Please confirm that you understand the{' '}
          <span className="text-cyan-400 underline">Appointment Proccess</span>
        </p>
      </div>
      <div className="my-2 flex text-[11px]">
        <input type="checkbox" className="mr-2"></input>
        <p>
          By submitting to this form, you are agreeing to our{' '}
          <span className="text-cyan-400 underline">Privacy Policy</span>
        </p>
      </div>
      <div className="my-2 flex text-[11px]">
        <input type="checkbox" className="mr-2"></input>
        <p>Consent to sharing your data with VHI healthcare</p>
      </div>

      <p className="text-[11px]">
        AllView Healthcare and VHI Healthcare are two separate entities involved
        in the provision of this healthcare service. As part of your medical
        treatment, it may be necessary to share you personal and medical
        information between these two companies to ensure the continuity and
        quality of your care.
      </p>

      <div>
        <button>Previous</button>
        <button>Submit</button>
      </div>
    </>
  );
};

export default Consent;
