import React from 'react'
import reactCSS from 'reactcss'

export const TitleWrap = ({ title, footer, children }) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        position: 'relative',
      },
      title: {
        position: 'absolute',
        textTransform: 'uppercase',
        fontSize: '13px',
        color: '#999',
        top: '-20px',
        WebkitFontSmoothing: 'antialiased',
      },
      footer: {
        position: 'absolute',
        fontSize: '11px',
        color: '#aaa',
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
