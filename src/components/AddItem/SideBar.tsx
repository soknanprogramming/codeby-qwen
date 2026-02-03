import React from "react";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <aside className="w-30 h-full bg-green-600 text-white p-4">
      <ul>
        <Link to="/add_item"><li>Add Item</li></Link>
        <Link to="/view_item"><li>View Item</li></Link>
      </ul>
    </aside>
  );
};

export default SideBar