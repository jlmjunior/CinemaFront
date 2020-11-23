import React from 'react'

export const ThemeContext = React.createContext()

const GlobalContext = (props) => {
  const [loading, setLoading] = React.useState(false)
  const [userConfig, setUserConfig] = React.useState(null)
  
  return (
    <ThemeContext.Provider value={{loading, setLoading, userConfig, setUserConfig}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default GlobalContext