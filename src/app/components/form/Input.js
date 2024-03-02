const Input = ({ value, onChange, type }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <input
      type={type}
      required
      value={value}
      onChange={handleChange}
      className="my-1 w-full p-2"
    ></input>
  );
};

export default Input;
