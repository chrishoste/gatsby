import './navbar.scss'
import React, { useState, useEffect } from 'react'

//Icons
import MenuIcon from '../../icons/menu.svg'

//Components
import LanguageSwitcher from '../LanguageSwitcher/languageSwitcher'
// import SocialMedia from '../SocialMedia/socialmedia'

export default ({ currentIndex, indices }) => {
  const [scrollPosition, setSrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    console.log(scrollPosition)
    setSrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`navbar ${
        scrollPosition > 30 ? 'navbar-filled' : 'navbar-clear'
      }`}
    >
      <div className="navbar-nav">
        <h1>BRANDING</h1>
        <div className="navbar-right">
          <LanguageSwitcher
            className="language-switcher"
            lang={currentIndex.frontmatter.language}
            indices={indices}
          />
          <MenuIcon className="menu-icon" />
        </div>
      </div>
    </div>
  )
}
