import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <ul className='menu'>
        <li>
            <NavLink to='/' className={({isActive}) => isActive && 'active'}>Main</NavLink>
        </li>
        <li>
            <NavLink to='/library' className={({isActive}) => isActive && 'active'}>Library</NavLink>
        </li>
        <li>
            <NavLink to='/readNow' className={({isActive}) => isActive && 'active'}>Read Now</NavLink>
        </li>
        <li>
            <NavLink to='/profile' className={({isActive}) => isActive && 'active'}>Profile</NavLink>
        </li>
        
    </ul>
  )
}

export default Menu