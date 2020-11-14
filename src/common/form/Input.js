const Input = ({ label, ...props }) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="text-black block" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        className="border border-gray-light rounded w-full px-2 py-1 text-black bg-white"
        {...props}
      />
    </div>
  );
};

export default Input;
