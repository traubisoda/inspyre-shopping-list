const Textarea = ({ label, ...props }) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="text-black block" htmlFor={props.id}>
          {label}
        </label>
      )}
      <textarea
        className="border border-gray-light rounded w-full px-2 py-1 text-black"
        {...props}
      />
    </div>
  );
};

export default Textarea;
