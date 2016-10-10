import React from 'react'
import reactCSS from 'reactcss'

export const Header = ({ children }) => {
  const styles = reactCSS({
    'default': {
      header: {
        fontFamily: 'Roboto',
        color: '#FF611A',
        fontSize: '32px',
        fontWeight: '500',
        padding: '70px 0',
        display: 'flex',
        justifyContent: 'center',
      },
    },
  })

  return (
    <div style={ styles.header }>
      { children }
    </div>
  )
}

export default Header
