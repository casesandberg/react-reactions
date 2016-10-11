import React from 'react'
import reactCSS from 'reactcss'

export const TitleWrap = ({ title, footer, children }) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        position: 'relative',
        fontFamily: 'Roboto, helvetica',
      },
      title: {
        position: 'absolute',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: 'rgba(0,0,0,.25)',
        top: '-22px',
        WebkitFontSmoothing: 'antialiased',
      },
      footer: {
        position: 'absolute',
        fontSize: '11px',
        color: 'rgba(0,0,0,.2)',
        bottom: '-20px',
        right: '0',
        WebkitFontSmoothing: 'antialiased',
      },
    },
  })

  return (
    <div style={ styles.wrap }>
      <div style={ styles.title }>{ title }</div>
      { children }
      { footer ? <div style={ styles.footer }>{ footer }</div> : null }
    </div>
  )
}

export default TitleWrap
