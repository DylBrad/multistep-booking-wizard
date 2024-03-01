const GpDetails = () => {
  return (
    <>
      <h2>GP Contact Details</h2>
      <hr className="divider"></hr>
      <div>
        <h3>GP Name</h3>
        <label>First</label>
        <input></input>
        <label>Last</label>
        <input></input>
      </div>
      <div className="textarea">
        <label>Describe your skin issue</label>
        <textarea />
      </div>

      <h2>Medical Insurance Details</h2>
      <span className="divider"></span>
      <div>
        <h3>Medical Insurer</h3>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
      </div>
      <div>
        <h3>VHI Policy Number</h3>
        <input></input>
      </div>

      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </>
  );
};

export default GpDetails;
