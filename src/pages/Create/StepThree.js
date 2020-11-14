import { useDispatch, useSelector } from 'react-redux';
import { updateField } from './newItemSlice';
import UserSelectList from '../../common/UserSelectList';

const getAssigneeId = (state) => state.newItem.assignedUserId;
const getUsers = (state) => state.newItem.users;

const StepThree = () => {
  const dispatch = useDispatch();
  const assigneeId = useSelector(getAssigneeId);
  const users = useSelector(getUsers);

  const updateAssignee = (id) =>
    dispatch(updateField({ name: 'assignedUserId', value: id }));

  return (
    <div>
      <UserSelectList
        users={users}
        selectedUserId={assigneeId}
        selectUser={updateAssignee}
      />
    </div>
  );
};

export default StepThree;
