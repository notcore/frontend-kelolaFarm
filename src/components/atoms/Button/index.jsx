const Button = ({
  children,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-3 py-3 rounded-lg bg-black text-white transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
