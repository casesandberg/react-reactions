import React from 'react'
import reactCSS from 'reactcss'

import SlackSelectorSection from './SlackSelectorSection'

export const SlackSelectorFooter = () => {
  const styles = reactCSS({
    'default': {
      footer: {
        padding: '5px 11px',
        borderTop: '1px solid rgba(0,0,0,.15)',
        display: 'flex',
        justifyContent: 'space-between',
      },
      left: {
        fontSize: '16px',
        lineHeight: '1.5',
        margin: '4px 2px',
        fontWeight: '600',
        WebkitFontSmoothing: 'antialiased',
      },
      right: {
        paddingRight: '6px',
      },
    },
  })

  return (
    <div style={ styles.footer }>
      <div style={ styles.left }>
        Handy Reactions
      </div>
      <div style={ styles.right }>
        <SlackSelectorSection emojis={ ['😀', '👍', '✅', '❤️', '👀'] } />
      </div>
    </div>
  )
}

export default SlackSelectorFooter
