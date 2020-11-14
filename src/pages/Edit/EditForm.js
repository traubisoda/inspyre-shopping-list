import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../common/form/Input';
import Textarea from '../../common/form/Textarea';
import SaveButton from '../../common/SaveButton';
import UserSelectList from '../../common/UserSelectList';
import Notification from '../../common/Notification';
import {
  setUpEditForm,
  updateField,
  updateAssignee,
  saveEditForm,
} from './editSlice';

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

  const changeAssignee = (userId) => dispatch(updateAssignee(userId));

  const save = (e) => {
    e.preventDefault();
    dispatch(saveEditForm());
  };

  useEffect(() => {
    dispatch(setUpEditForm(itemId));
  }, [itemId, dispatch]);

  return (
    <div className="bg-white shadow-lg p-4">
      {status === 'success' && (
        <Notification>We've saved your changes!</Notification>
      )}
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
        <Input
          type="date"
          name="dueDate"
          id="due"
          label="Due date"
          value={dueDate}
          onChange={onChange}
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

export default EditForm;
