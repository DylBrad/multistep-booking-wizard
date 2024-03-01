const PatientDetails = () => {
  return (
    <>
      <h2>Patient Contact Details</h2>
      <span className="divider"></span>
      <div>
        <h3>Name</h3>
        <label>First</label>
        <input></input>
        <label>Last</label>
        <input></input>
      </div>
      <div>
        <h3>
          Email <span>(Required)</span>
        </h3>
        <label>Enter Email</label>
        <input></input>
        <label>Confirm Email</label>
        <input></input>
      </div>
      <div>
        <label>Phone</label>
        <input></input>
      </div>
      <div>
        <div>
          <label>Date Of Birth</label>
          <div>
            <input></input>
            <input></input>
            <input></input>
          </div>
        </div>
        <div>
          <label>
            Over 16 years old? <span>(Required)</span>
          </label>
          <div>
            <input type="checkbox"></input>
            <p>Yes, I'm over 16 years old</p>
          </div>
          <div>
            <input type="checkbox"></input>
            <p>The patient is less than 16 years old</p>
          </div>
        </div>
      </div>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
  );
};

export default PatientDetails;
