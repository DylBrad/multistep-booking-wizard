const Consent = () => {
  return (
    <>
      <h2>Consent</h2>
      <hr className="divider"></hr>

      <input type="checkbox"></input>
      <p>
        Please confirm that you understand the <span>Appointment Proccess</span>
      </p>
      <input type="checkbox"></input>
      <p>
        By submitting to this form, you are agreeing to our{' '}
        <span>Privacy Policy</span>
      </p>
      <input type="checkbox"></input>
      <p>Consent to sharing your data with VHI healthcare</p>

      <p>
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
