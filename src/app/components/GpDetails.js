import FormHeader from './form/FormHeader';
import Input from './form/Input';
import InputTitle from './form/InputTitle';
import Button from './form/Button';

const GpDetails = () => {
  return (
    <>
      <FormHeader>GP Contact Details</FormHeader>
      <hr className="divider"></hr>
      <div>
        <InputTitle>GP Name</InputTitle>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input />
            <label>First</label>
          </div>
          <div>
            <Input />
            <label>Last</label>
          </div>
        </div>
      </div>
      <div className="textarea">
        <InputTitle>Describe your skin issue</InputTitle>
        <textarea className="w-full h-[100px]" />
      </div>

      <FormHeader>Medical Insurance Details</FormHeader>
      <hr className="divider"></hr>

      <span className="divider"></span>
      <div className="flex flex-col">
        <InputTitle>Medical Insurer</InputTitle>
        <div>
          <input type="radio" id="vhi"></input>
          <label id="vhi">VHI Healthcare</label>
        </div>{' '}
        <div>
          <input type="radio" id="irish-life"></input>
          <label id="irish-life">Irish Life Health</label>
        </div>{' '}
        <div>
          <input type="radio" id="laya"></input>
          <label id="laya">Laya Healthcare</label>
        </div>{' '}
        <div>
          <input type="radio" id="other"></input>
          <label>Other</label>
        </div>{' '}
        <div>
          <input type="radio" id="none"></input>
          <label id="none">None</label>
        </div>
      </div>
      <div>
        <InputTitle>VHI Policy Number</InputTitle>
        <Input></Input>
      </div>

      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </>
  );
};

export default GpDetails;
