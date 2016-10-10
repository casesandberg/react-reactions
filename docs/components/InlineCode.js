import React from 'react'
import reactCSS from 'reactcss'

export const InlineCode = ({ children }) => {
  const styles = reactCSS({
    'default': {
      code: {
        background: 'rgba(0,0,0,.05)',
        fontFamily: 'Consolas, Monaco, Andale Mono, monospace',
        lineHeight: '1.5',
        fontSize: '13px',
        borderRadius: '4px',
        padding: '2px 4px',
      },
    },
  })

  return (
    <span style={ styles.code }>{ children }</span>
  )
}

export default InlineCode
