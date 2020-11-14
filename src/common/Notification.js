import { useSpring, animated } from 'react-spring';

const Notification = ({ children }) => {
  const notificationStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div
      style={notificationStyle}
      className="bg-green-600 text-white font-bold p-2 text-center mb-3"
    >
      {children}
    </animated.div>
  );
};

export default Notification;
