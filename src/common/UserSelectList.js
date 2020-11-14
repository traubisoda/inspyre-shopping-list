const UserSelectList = ({ users, selectedUserId, selectUser }) => (
  <div className="my-2">
    {users.map((user) => (
      <div
        key={user.id}
        className={`flex items-center justify-between rounded cursor-pointer mb-2 p-2 ${
          selectedUserId === user.id && 'border border-primary'
        }`}
        onClick={() => selectUser(user.id)}
      >
        <div>{user.name}</div>
        <img
          src={user.profilePictureUrl}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
      </div>
    ))}
  </div>
);

export default UserSelectList;
