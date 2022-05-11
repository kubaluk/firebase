import React from 'react'
import { useTheme } from '../../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import StyledThemeButton from './StyledThemeButton'

function ThemeButton(){
  const {theme, switchTheme} = useTheme()

  return (
    <>
      <StyledThemeButton>
        <FontAwesomeIcon icon={theme==='dark' ? faToggleOn : faToggleOff} onClick={switchTheme} />
      </StyledThemeButton>
    </>
  )
}

export default ThemeButton