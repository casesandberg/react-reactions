import React from 'react'
import reactCSS from 'reactcss'

import SlackSelectorHeaderTab from './SlackSelectorHeaderTab'

export const SlackSelectorHeader = () => {
  const styles = reactCSS({
    'default': {
      header: {
        padding: '4px 0 0 7px',
        borderBottom: '1px solid rgba(0,0,0,.15)',
        display: 'flex',
      },
    },
  })

  return (
    <div style={ styles.header }>
      <SlackSelectorHeaderTab />
      <SlackSelectorHeaderTab />
      <SlackSelectorHeaderTab />
      <SlackSelectorHeaderTab />
    </div>
  )
}

SlackSelectorHeader.defaultProps = {
  tabs: ['mine', 'people', 'nature', 'food-and-drink', 'activity', 'travel-and-places',
          'objects', 'symbols', 'flags'],
}

export default SlackSelectorHeader
