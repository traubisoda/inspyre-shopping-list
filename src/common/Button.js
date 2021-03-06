const Button = ({ children, className, extraClasses, ...props }) => {
  let classes =
    className ||
    'bg-primary text-white px-8 py-3 shadow-lg flex items-center justify-center ';
  if (extraClasses) {
    classes += extraClasses;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
