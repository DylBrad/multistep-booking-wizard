import FormHeader from './form/FormHeader';
import InputTitle from './form/InputTitle';
import Input from './form/Input';
import Button from './form/Button';

const PatientDetails = () => {
  return (
    <>
      <FormHeader>Patient Contact Details</FormHeader>
      <hr className="divider"></hr>
      <InputTitle>Name</InputTitle>

      <div className="flex justify-between	">
        <div className="w-[48%]">
          <label>First</label>
          <Input></Input>
        </div>
        <div className="w-[48%]">
          <label>Last</label>
          <Input></Input>
        </div>
      </div>

      <InputTitle>
        Email <span>(Required)</span>
      </InputTitle>

      <div className="flex justify-between	">
        <div className="w-[48%]">
          <label>Enter Email</label>
          <Input></Input>
        </div>

        <div className="w-[48%]">
          <label>Confirm Email</label>
          <Input></Input>
        </div>
      </div>
      <div>
        <InputTitle>Phone</InputTitle>
        <Input></Input>
      </div>
      <div className="flex justify-between	">
        <div className="w-[48%]">
          <InputTitle>Date Of Birth</InputTitle>
          <div>
            <Input></Input>
            <Input></Input>
            <Input></Input>
          </div>
        </div>
        <div className="w-[48%]">
          <InputTitle>
            Over 16 years old? <span>(Required)</span>
          </InputTitle>
          <div className="my-2 flex text-[11px]">
            <input type="checkbox" className="mr-2"></input>
            <p>Yes, I&apos;m over 16 years old</p>
          </div>
          <div className="my-2 flex text-[11px]">
            <input type="checkbox" className="mr-2"></input>
            <p>The patient is less than 16 years old</p>
          </div>
        </div>
      </div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </>
  );
};

export default PatientDetails;
