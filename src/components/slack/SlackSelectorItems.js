import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import emoji from 'emoji-as-array'

import SlackSelectorSection from './SlackSelectorSection'

export const SlackSelectorItems = () => {
  const styles = reactCSS({
    'default': {
      sections: {
        padding: '4px',
        background: '#fff',
      },
      wrap: {
        maxHeight: '220px',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '4px',
      },
    },
  })

  return (
    <div style={ styles.sections }>
      <div style={ styles.wrap } className="frame">
        { _.map(emoji, (group, slug) => {
          return (
            <SlackSelectorSection key={ slug } slug={ slug } emojis={ group } />
          )
        }) }
      </div>
    </div>
  )
}

export default SlackSelectorItems
