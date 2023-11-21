// Write your code here
import {useContext} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const object = useContext(ConfigurationContext)
  const {showContent, showLeftNavbar, showRightNavbar} = object

  return (
    <>
      <div className="body-container">
        {showLeftNavbar ? (
          <div className="left-nav">
            <h1 className="heading">Left Navbar Menu</h1>
            <ul className="left-nav-ul">
              <li className="left-nav-item">Item 1</li>
              <li className="left-nav-item">Item 2</li>
              <li className="left-nav-item">Item 3</li>
              <li className="left-nav-item">Item 4</li>
            </ul>
          </div>
        ) : null}

        {showContent ? (
          <div className="content-container">
            <h1 className="heading">Content</h1>
            <p className="content-paragraph">
              Lorem ipsum dolor sit amet, consectetur adiplscing elit, sed do
              elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        ) : null}

        {showRightNavbar ? (
          <div className="right-nav">
            <h1 className="heading">Right Navbar</h1>
            <div className="ad-container">
              <p className="ad">Ad 1</p>
              <p className="ad">Ad 2</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Body
