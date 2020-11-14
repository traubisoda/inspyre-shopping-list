import Flatpickr from 'react-flatpickr';

const DatePicker = ({ label, ...props }) => {
  return (
    <div className="mb-3">
      {label && (
        <label className="text-black block" htmlFor={props.id}>
          {label}
        </label>
      )}
      <Flatpickr
        className="border border-gray-light rounded w-full px-2 py-1 text-black bg-white"
        {...props}
      />
    </div>
  );
};

export default DatePicker;
