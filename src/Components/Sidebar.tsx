import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <motion.div
      className="w-64 bg-gray-800 text-white h-full"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold">Task Scheduler</h2>
        <nav className="mt-8">
          <ul>
            <li>
              <Link to="/" className="block p-2">Home</Link>
            </li>
            <li>
              <Link to="/dashboard" className="block p-2">Dashboard</Link>
            </li>
            <li>
              <Link to="/settings" className="block p-2">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
