import { useState, useEffect, SetStateAction } from 'react';
import { motion } from 'framer-motion';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const handleStart = (duration: SetStateAction<number>) => {
    setTime(duration);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="text-2xl font-semibold"
        animate={{ opacity: time > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {time > 0 ? `${time}s` : 'Time is up!'}
      </motion.div>
      <button onClick={() => handleStart(60)} className="mt-4 p-2 bg-green-500 text-white rounded">
        Start Timer
      </button>
    </div>
  );
};

export default Timer;
