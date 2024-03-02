const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 rounded-full bg-blue-900 mr-2 mt-2  text-white">
      {children}
    </button>
  );
};

export default Button;
