const InputSelect = ({ options }) => {
  return (
    <select className="text-sm	my-1 text-zinc-400 w-full p-2">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;
