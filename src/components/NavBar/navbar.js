import './navbar.scss'
import React from 'react'

//Icons
import MenuIcon from '../../icons/menu.svg'

//Components
import LanguageSwitcher from '../LanguageSwitcher/languageSwitcher'

export default ({ currentIndex, indices }) => {
  return (
    <div className="navbar">
      <div className="navbar-nav">
        <MenuIcon className="menu-icon" />
        <LanguageSwitcher
          lang={currentIndex.frontmatter.language}
          indices={indices}
        ></LanguageSwitcher>
      </div>
    </div>
  )
}
