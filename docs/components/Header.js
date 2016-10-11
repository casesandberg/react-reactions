import React from 'react'
import reactCSS from 'reactcss'

export const Header = ({ children, color }) => {
  const styles = reactCSS({
    'default': {
      header: {
        fontFamily: 'Roboto',
        color,
        fontSize: '32px',
        fontWeight: '500',
        padding: '40px 0',
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

Header.defaultProps = {
  color: '#FF611A',
}

export default Header
