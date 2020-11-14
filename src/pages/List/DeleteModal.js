import { useSelector, useDispatch } from 'react-redux';
import { cancelDelete, removeItemById } from './shoppingListSlice';
import { animated, useSpring } from 'react-spring';
import Button from '../../common/Button';

const getItem = (state) =>
  state.shoppingList.items.find(
    (item) => item.id === state.shoppingList.deletingItemId
  );

const DeleteModal = () => {
  const dispatch = useDispatch();
  const item = useSelector(getItem);
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const slide = useSpring({
    transform: 'translate3D(0, 0, 0)',
    from: { transform: 'translate3D(0, -40px, 0)' },
  });
  const cancel = () => dispatch(cancelDelete());
  const confirm = () => dispatch(removeItemById(item.id));

  return (
    <animated.div
      style={fade}
      className="fixed z-10 inset-0 bg-opacity-50 bg-black h-screen w-screen flex items-center justify-center"
    >
      <animated.div style={slide} className="rounded bg-white p-4">
        <p className="font-bold text-lg">Are you sure to delete this item?</p>
        <p className="text-gray-dark text-center text-lg mt-2">{item.name}</p>
        <div className="flex justify-between mt-5">
          <button
            className="bg-white border border-primary px-8 py-3 flex items-center justify-center"
            onClick={cancel}
          >
            Cancel
          </button>
          <Button onClick={confirm}>Yes</Button>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default DeleteModal;
