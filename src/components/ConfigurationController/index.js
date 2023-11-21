// Write your code here
import {useContext} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => {
  const object = useContext(ConfigurationContext)
  console.log(object)

  const {
    showContent,
    onToggleShowContent,
    showLeftNavbar,
    onToggleShowLeftNavbar,
    showRightNavbar,
    onToggleShowRightNavbar,
  } = object

  const onChangeContent = () => {
    // setShowContent(!showContent)
    onToggleShowContent()
  }

  const onChangeLeftNavbar = () => {
    // setShowLeftNavbar(!showLeftNavbar)
    onToggleShowLeftNavbar()
  }

  const onChangeRightNavbar = () => {
    // setShowRightNavbar(!showRightNavbar)
    onToggleShowRightNavbar()
  }

  return (
    <>
      <div className="top-container">
        <h1 className="top-container-heading">Layout</h1>

        <div className="input-container">
          <input
            type="checkbox"
            checked={showContent}
            onChange={onChangeContent}
            name="content"
            id="content"
          />
          <label htmlFor="content">Content</label>
        </div>

        <div className="input-container">
          <input
            type="checkbox"
            name="left-navbar"
            id="left-navbar"
            checked={showLeftNavbar}
            onChange={onChangeLeftNavbar}
          />
          <label htmlFor="left-navbar">Left Navbar</label>
        </div>

        <div className="input-container">
          <input
            type="checkbox"
            name="right-navbar"
            id="right-navbar"
            checked={showRightNavbar}
            onChange={onChangeRightNavbar}
          />
          <label htmlFor="right-navbar">Right Navbar</label>
        </div>
      </div>
    </>
  )
}

export default ConfigurationController
