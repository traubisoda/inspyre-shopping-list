import { useDispatch, useSelector } from 'react-redux';
import { updateField } from './newItemSlice';
import Input from '../../common/form/Input';
import Textarea from '../../common/form/Textarea';

const getName = (state) => state.name;
const getDescription = (state) => state.description;

const StepOne = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const description = useSelector(getDescription);
  const onChange = (e) =>
    dispatch(updateField({ name: e.target.name, value: e.target.value }));

  return (
    <div>
      <Input
        type="text"
        name="name"
        id="name"
        label="Name"
        value={name}
        onChange={onChange}
      />
      <Textarea
        name="description"
        id="description"
        label="Description"
        rows="10"
        value={description}
        onChange={onChange}
      />
    </div>
  );
};

export default StepOne;
