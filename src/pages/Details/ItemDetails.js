const ItemDetails = ({ item }) => (
  <div className="bg-white border border-gray-light shadow-lg p-4">
    <p className="text-3xl mb-3">{item.name}</p>
    <div className="inline-block flex items-center mb-3">
      <div>
        <p className="text-gray-medium leading-tight text-sm mt-1">
          Assigned to
        </p>
        <p className="text-xl leading-tight">{item.assignedTo.name}</p>
      </div>
      <img
        src={item.assignedTo.profilePictureUrl}
        alt={item.assignedTo.name}
        className="block rounded rounded-full w-10 h-10 ml-5"
      />
    </div>
    <div className="mb-3">
      <p className="text-gray-medium leading-tight text-sm mt-1">Due date</p>
      <p className="text-xl leading-tight">{item.dueDate}</p>
    </div>

    <p>{item.description}</p>
  </div>
);

export default ItemDetails;
