import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveNewItem, reset } from './newItemSlice';
import { showNotification } from '../../store';
import StepIndicator from './StepIndicator';
import Button from '../../common/Button';
import SaveButton from '../../common/SaveButton';

const getSaving = (state) => state.newItem.status === 'saving';
const getSavedItemId = (state) => state.newItem.savedItemId;

const Stepper = ({ steps }) => {
  const dispatch = useDispatch();
  const isSaving = useSelector(getSaving);
  const savedItemId = useSelector(getSavedItemId);
  const router = useHistory();
  const [step, setStep] = useState(0);
  const isLastStep = step === steps.length - 1;
  const next = () => setStep(step + 1);
  const save = () => dispatch(saveNewItem());
  const getStatus = (stepIndex) => {
    if (stepIndex === step) return 'active';
    else if (stepIndex < step) return 'done';

    return 'pending';
  };

  useEffect(() => {
    if (savedItemId) {
      dispatch(showNotification('Successfully created new shopping item!'));
      dispatch(reset());
      router.push(`/item/${savedItemId}`);
    }
  }, [savedItemId, dispatch, router]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        {steps.map((step, i) => (
          <StepIndicator
            step={i + 1}
            label={step.name}
            status={getStatus(i)}
            key={i}
          />
        ))}
      </div>
      <div className="w-5/12 bg-white shadow-lg p-4 mt-5">
        {steps[step].component}
        {isLastStep ? (
          <SaveButton
            extraClasses="w-full mt-6"
            onClick={save}
            saving={isSaving}
          >
            Submit
          </SaveButton>
        ) : (
          <Button extraClasses="w-full mt-6 " onClick={next}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired,
    }).isRequired
  ),
};

export default Stepper;
