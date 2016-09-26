import React from 'react'
import reactCSS from 'reactcss'

import SlackSelectorHeader from './SlackSelectorHeader'
import SlackSelectorItems from './SlackSelectorItems'
import SlackSelectorFooter from './SlackSelectorFooter'

export const SlackSelector = () => {
  const styles = reactCSS({
    'default': {
      menu: {
        position: 'absolute',
        minWidth: '22.4375rem',
        maxWidth: '22.4375rem',
        color: '#555459',
        fontSize: '.95rem',
        fontFamily: 'Slack-Lato,appleLogo,sans-serif',
        background: '#f7f7f7',
        lineHeight: '1rem',
        boxShadow: '0 5px 10px rgba(0,0,0,.12)',
        borderRadius: '6px',
        border: '1px solid rgba(0,0,0,.15)',
      },
    },
  })

  return (
    <div style={ styles.menu }>
      <SlackSelectorHeader />
      <SlackSelectorItems />
      <SlackSelectorFooter />
    </div>
  )
}

SlackSelector.defaultProps = {
  reactions: ['👍', '👎', '😄', '🎉', '😕', '❤️'],
}

export default SlackSelector
