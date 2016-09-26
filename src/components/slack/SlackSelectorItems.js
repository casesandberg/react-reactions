import React from 'react'
import reactCSS from 'reactcss'
import { emojiGroups } from '../../helpers/emoji'

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
      <SlackSelectorSection emojis={ emojiGroups.people } />
    </div>
  )
}

export default SlackSelectorHeaderItems
