import PropTypes from 'prop-types';
import { Checkmark } from '../../common/icons';

const StepIndicator = ({ step, label, status }) => {
  const color = ['active', 'done'].includes(status)
    ? 'bg-primary'
    : 'bg-gray-medium';
  const textColor = ['active', 'done'].includes(status)
    ? 'text-black'
    : 'text-gray-medium';
  const indicator =
    status === 'done' ? <Checkmark className="w-6 h-6" /> : step;

  return (
    <div className="flex items-center mx-3">
      <div
        className={`text-white w-8 h-8 mr-2 rounded-full flex items-center justify-center ${color}`}
      >
        {indicator}
      </div>
      <div className={textColor}>{label}</div>
    </div>
  );
};

StepIndicator.propTypes = {
  step: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['active', 'done', 'pending']).isRequired,
};

export default StepIndicator;
