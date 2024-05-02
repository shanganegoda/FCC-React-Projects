import MenuItem from "./MenuItem"
import './styles.css'

export default function MenuList({menus = []}) {

  return (
    <ul className="menu-list-container">
      {
        menus && menus.length ? menus.map(menuItem => <MenuItem key={menuItem.label} menuItem={menuItem}/>): null
      }
    </ul>
  )
}
