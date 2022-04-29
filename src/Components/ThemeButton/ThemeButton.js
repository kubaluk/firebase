import React from 'react'
import { useTheme } from '../../Contexts/ThemeContext'

function ThemeButton(){
  const {switchTheme} = useTheme()

  return (
    <>
      <button onClick={switchTheme}>Switch Theme</button>
    </>
  )
}

export default ThemeButton