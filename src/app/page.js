import AppointmentDetails from './components/AppointmentDetails';
import PatientDetails from './components/PatientDetails';
import GpDetails from './components/GpDetails';
import PatientAddress from './components/PatientAddress';
import Consent from './components/Consent';

export default function Home() {
  return (
    <div className="App">
      <div className="form-wrapper">
        <div className="navigation">
          <span>Step ??? of 5</span>
          <div className="progress-container">
            <div className="progress">???%</div>
          </div>
        </div>
        <Consent />
      </div>
    </div>
  );
}
