import React from 'react'
import { MenuList } from "../Datas/MenuList";
import MenuItem from '../component/MenuItem';
import "./menu.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">{MenuList.map((menuItem) => {
        return <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price} />
      })}</div>
    </div>
  );
}

export default Menu