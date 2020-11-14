import { useDispatch, useSelector } from 'react-redux';
import { updateField } from './newItemSlice';
import Input from '../../common/form/Input';

const getDueDate = (state) => state.newItem.dueDate;

const StepTwo = () => {
  const dispatch = useDispatch();
  const value = useSelector(getDueDate);
  const onChange = (e) =>
    dispatch(updateField({ name: 'dueDate', value: e.target.value }));
  return (
    <div>
      <Input
        type="date"
        name="dueDate"
        id="dueDate"
        label="Due date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default StepTwo;
