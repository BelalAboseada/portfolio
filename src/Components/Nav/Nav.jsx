<<<<<<< HEAD
// import React from 'react'
import { links } from '../../data'
import {  NavLink } from 'react-router-dom'
import './style.scss'

const Nav = () => {
  return (
    <nav className='Nav position-fixed d-flex align-items-center'>
      <div className="Nav-menu">
        <ul className="Nav-list">
          {links.map(({icon,name,path},index) => {
            return(
              <li className="Nav-item" key={index}>
                <NavLink to={path} aria-label={name}  className={({isActive}) => isActive ? "Nav-link Nav-active" : "Nav-link" }>
                  {icon}
                  <h3 className="nav-name">
                    {name}
                  </h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

=======
// import React from 'react'
import { links } from '../../data'
import {  NavLink } from 'react-router-dom'
import './style.scss'

const Nav = () => {
  return (
    <nav className='Nav position-fixed d-flex align-items-center'>
      <div className="Nav-menu">
        <ul className="Nav-list">
          {links.map(({icon,name,path},index) => {
            return(
              <li className="Nav-item" key={index}>
                <NavLink to={path} aria-label={name}  className={({isActive}) => isActive ? "Nav-link Nav-active" : "Nav-link" }>
                  {icon}
                  <h3 className="nav-name">
                    {name}
                  </h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

>>>>>>> 61b7dec643d5f99903dc1bd44e8f63c4cfbbabc0
export default Nav