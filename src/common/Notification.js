import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { hideNotification } from '../store';

const getNotification = (state) => state.notification;

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(getNotification);

  const notificationStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideNotification());
    }, 3000);
  });

  return (
    <animated.div
      style={notificationStyle}
      className="bg-green-600 text-white font-bold p-2 text-center mb-3"
    >
      {notification.text}
    </animated.div>
  );
};

export default Notification;
