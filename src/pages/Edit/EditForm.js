import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import Input from '../../common/form/Input';
import DatePicker from '../../common/form/DatePicker';
import Textarea from '../../common/form/Textarea';
import SaveButton from '../../common/SaveButton';
import UserSelectList from '../../common/UserSelectList';
import {
  setUpEditForm,
  updateField,
  updateAssignee,
  saveEditForm,
} from './editSlice';
import { showNotification } from '../../store';

const getFormState = (state) => ({
  status: state.edit.status,
  name: state.edit.name,
  description: state.edit.description,
  dueDate: state.edit.dueDate,
  assigneeId: state.edit.assignedUserId,
});
const getUsers = (state) => state.edit.users;

const EditForm = ({ itemId }) => {
  const dispatch = useDispatch();
  const { status, name, description, dueDate, assigneeId } = useSelector(
    getFormState
  );
  const users = useSelector(getUsers);

  const onChange = (e) => {
    e.preventDefault();
    dispatch(updateField({ value: e.target.value, name: e.target.name }));
  };

  const changeDate = (_, value) =>
    dispatch(updateField({ name: 'dueDate', value }));

  const changeAssignee = (userId) => dispatch(updateAssignee(userId));

  const save = (e) => {
    e.preventDefault();
    dispatch(saveEditForm());
  };

  useEffect(() => {
    dispatch(setUpEditForm(itemId));
  }, [itemId, dispatch]);

  useEffect(() => {
    if (status === 'success') {
      dispatch(showNotification('We saved your changes!'));
    }
  }, [status, dispatch]);

  return (
    <div className="bg-white shadow-lg p-4">
      <form onSubmit={save}>
        <Input
          type="text"
          name="name"
          id="name"
          label="Name"
          value={name}
          onChange={onChange}
        />
        <Textarea
          value={description}
          name="description"
          id="description"
          label="Description"
          rows="10"
          onChange={onChange}
        />
        <DatePicker
          label="Due date"
          value={dueDate}
          onChange={changeDate}
          options={{ dateFormat: 'Y-m-d' }}
        />

        <UserSelectList
          users={users}
          selectedUserId={assigneeId}
          selectUser={changeAssignee}
        />

        <SaveButton saving={status === 'saving'} extraClasses="w-full">
          Save
        </SaveButton>
      </form>
    </div>
  );
};

EditForm.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default EditForm;
