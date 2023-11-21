import {useState} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

const App = () => {
  const [showContent, setShowContent] = useState(true)
  const [showLeftNavbar, setShowLeftNavbar] = useState(true)
  const [showRightNavbar, setShowRightNavbar] = useState(true)

  const onToggleShowContent = () => {
    setShowContent(!showContent)
  }

  const onToggleShowLeftNavbar = () => {
    setShowLeftNavbar(!showLeftNavbar)
  }

  const onToggleShowRightNavbar = () => {
    setShowRightNavbar(!showRightNavbar)
  }

  return (
    <ConfigurationContext.Provider
      value={{
        showContent,
        onToggleShowContent,
        showLeftNavbar,
        onToggleShowLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
      }}
    >
      <div>
        <ConfigurationController />
        <Layout />
      </div>
    </ConfigurationContext.Provider>
  )
}

export default App
