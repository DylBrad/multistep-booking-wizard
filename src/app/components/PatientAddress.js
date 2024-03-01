const PatientAddress = () => {
  return (
    <>
      <h2>Patient Address</h2>
      <hr className="divider"></hr>

      <h3>Address</h3>
      <input></input>
      <label>Street Address</label>
      <input></input>
      <label>Address Line 2</label>
      <div>
        <input></input>
        <label>City</label>
        <input></input>
        <label>County</label>
      </div>
      <div>
        <input></input>
        <label>Eircode</label>
        <select></select>
        <label>Country</label>
      </div>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
  );
};

export default PatientAddress;
