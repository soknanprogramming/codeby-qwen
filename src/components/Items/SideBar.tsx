import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar: React.FC = () => {
  const location = useLocation();
  console.log(location);
  return (
    <aside className="w-30 h-full bg-green-600 text-white p-4">
      <ul>
        <Link to="/add_item"><li className="border p-1 m-1">Add Item</li></Link>
        <Link to="/view_item"><li className="border p-1 m-1">View Item</li></Link>
      </ul>
    </aside>
  );
};

export default SideBar