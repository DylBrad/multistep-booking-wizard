const AppointmentDetails = () => {
  return (
    <>
      <h2>Appointment Details</h2>
      <span className="divider"></span>
      <div className="dropdown">
        <label>Appointment Type</label>
        <input></input>
      </div>
      <div className="dropdown">
        <label>Preferred Location</label>
        <input></input>
      </div>
      <div className="textarea">
        <label>Describe your skin issue</label>
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
