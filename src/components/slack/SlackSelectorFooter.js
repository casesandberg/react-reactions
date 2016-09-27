import React from 'react'
import reactCSS from 'reactcss'

export const SlackSelectorFooter = () => {
  const styles = reactCSS({
    'default': {
      footer: {
        padding: '5px 11px',
        borderTop: '1px solid rgba(0,0,0,.15)',
      },
      left: {
        fontSize: '16px',
        lineHeight: '1.5',
        margin: '4px 2px',
      },
    },
  })

  return (
    <div style={ styles.footer }>
      <div style={ styles.left }>
        Handy Reactions
      </div>
    </div>
  )
}

export default SlackSelectorFooter
