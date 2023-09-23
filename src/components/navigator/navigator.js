import React from 'react';
import './navigator.css'

const Navigator = (props) => {

  return(
    <div className="nav">
      <nav id="top-menu">
        <ul>
          <li className="top-menu-li">
            PROFILE
          </li>
          <li className="top-menu-li">
            PROJECT
          </li>
          <li className="top-menu-li">
            CONTACT
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigator;