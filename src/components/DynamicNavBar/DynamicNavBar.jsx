import MenuList from './MenuList.jsx'
import menus from './data.js'
import './styles.css'

export default function DynamicNavBar() {
  return (
    <div className='tree-view-container'>
      <MenuList menus={menus}/>
    </div>
  )
}
