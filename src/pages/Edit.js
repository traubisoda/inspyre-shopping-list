import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageHead from '../components/PageHead';
import {
  setUpEditForm,
  updateField,
  updateAssignee,
  saveEditForm,
} from '../editSlice';

const getFormState = (state) => ({
  name: state.edit.name,
  description: state.edit.description,
  dueDate: state.edit.dueDate,
  assigneeId: state.edit.assignedUserId,
});
const getUsers = (state) => state.edit.users;

const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, description, dueDate, assigneeId } = useSelector(getFormState);
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
    dispatch(setUpEditForm(id));
  }, [id, dispatch]);

  return (
    <>
      <PageHead title="Items" hasBack={true} />
      <form onSubmit={save}>
        name:
        <input type="text" name="name" value={name} onChange={onChange} />
        <br />
        description:
        <textarea
          value={description}
          name="description"
          onChange={onChange}
        ></textarea>
        <br />
        <input type="date" value={dueDate} name="dueDate" onChange={onChange} />
        <br />
        {users.map((user) => (
          <div
            className={user.id === assigneeId ? 'bg-primary' : ''}
            key={user.id}
            onClick={(e) => changeAssignee(user.id)}
          >
            {user.name}
          </div>
        ))}
        <button>Save</button>
      </form>
    </>
  );
};

export default Edit;
