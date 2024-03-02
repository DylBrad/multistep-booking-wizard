const InputSelect = ({ id, options, value, updateFormData, field }) => {
  const captureData = (e) => {
    const selectedOption = e.target.value;
    console.log('Selected option:', selectedOption);
    updateFormData({ [field]: selectedOption });
  };
  return (
    <select
      required
      id={id}
      value={value}
      onChange={captureData}
      className="text-sm	my-1 text-zinc-400 w-full p-2"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
