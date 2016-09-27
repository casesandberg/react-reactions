import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import emoji from 'emoji-as-array'

import SlackSelectorSection from './SlackSelectorSection'

export const SlackSelectorItems = () => {
  const styles = reactCSS({
    'default': {
      wrap: {
        background: '#fff',
        maxHeight: '270px',
        overflowY: 'auto',
        overflowX: 'hidden',
      },
      sections: {
        padding: '8px',
      },
    },
  })

  return (
    <div style={ styles.wrap }>
      <div style={ styles.sections }>
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
