import { Link } from "react-router-dom";
import "../styles.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Customer Management</Link></li>
        <li><Link to="/stats">Customer Stats</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
