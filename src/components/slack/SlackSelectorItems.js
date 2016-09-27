import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import emoji from 'emoji-as-array'

import SlackSelectorSection from './SlackSelectorSection'

export const SlackSelectorHeaderItems = () => {
  const styles = reactCSS({
    'default': {
      items: {
        padding: '8px',
        background: '#fff',
      },
    },
  })

  return (
    <div style={ styles.items }>
      { _.map(emoji, (group, key) => {
        return (
          <SlackSelectorSection emojis={ group } />
        )
      }) }
    </div>
  )
}

export default SlackSelectorHeaderItems
