import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";


export default function MenuItem({menuItem}) {

  const [displayCurrentChildren, setdisplayCurrentChildren]  = useState({})

  function handleToggleChildren(getCurrentLabel) {
    setdisplayCurrentChildren({
      ...displayCurrentChildren, 
      [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
    })
  }

  console.log(displayCurrentChildren)

  return (
    <li >
      <div className="menu-item">
        <p>{menuItem.label}</p>
        {menuItem && menuItem.children && menuItem.children.length ? <span onClick={() => handleToggleChildren(menuItem.label)}>
        {displayCurrentChildren[menuItem.label] ? <FaMinus/> : <FaPlus/>}</span> : null}
      </div>
        {displayCurrentChildren[menuItem.label] &&  menuItem.children ? <MenuList menus={menuItem.children}/> : null}
    </li>
  )
}
