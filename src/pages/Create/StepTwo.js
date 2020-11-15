import { useDispatch, useSelector } from 'react-redux';
import { updateField } from './newItemSlice';
import DatePicker from '../../common/form/DatePicker';

const getDueDate = (state) => state.newItem.dueDate;

const StepTwo = () => {
  const dispatch = useDispatch();
  const value = useSelector(getDueDate);
  const onChange = (_, value) =>
    dispatch(updateField({ name: 'dueDate', value }));

  return (
    <div>
      <DatePicker
        label="Due date"
        placeholder="Choose a date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default StepTwo;
