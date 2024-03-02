const Button = ({ children, bg, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full mr-2 mt-2  text-white ${bg}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
