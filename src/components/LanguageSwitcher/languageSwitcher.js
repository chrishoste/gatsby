import './languageSwitcher.scss'
import React, { useState } from 'react'
import { Link } from 'gatsby'

//Icons
import DownArrow from '../../icons/down-arrow.svg'

export default props => {
  const [open, setOpen] = useState(false)

  return (
    <div className="language-switcher">
      <button className="switch" onClick={() => setOpen(!open)}>
        <span>{props.lang.toUpperCase()}</span>
        <DownArrow />
      </button>
      <div className={`dropdown ${open ? '' : 'dropdown-close'}`}>
        <ul>
          {props.indices.map(function (indexItem, index) {
            const currentLang = indexItem.frontmatter.language === props.lang
            return (
              <li key={index} className={currentLang ? 'current-selected' : ''}>
                <Link to={indexItem.frontmatter.path}>
                  {indexItem.frontmatter.language.toUpperCase()}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
