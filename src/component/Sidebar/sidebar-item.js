// import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './styles.css';

const SideBarItem = ({ item, active }) => {
  // Remove 'hover' and 'setHover' since they are not being used
  return (
    <Link
      to={item.path}
      className={active ? "sidebar-item-active" : "sidebar-item"}
    >
      <img
        src={item.icon}
        alt={`icon-${item.icon}`}
        className="sidebar-item-icon"
      />
      <span className="sidebar-item-label">{item.title}</span>
    </Link>
  );
};


export default SideBarItem;