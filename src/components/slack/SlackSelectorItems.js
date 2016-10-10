import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import emoji from 'emoji-as-array'

import SlackSelectorSection from './SlackSelectorSection'

export const SlackSelectorItems = ({ scrollHeight, frequent, onSelect, removeEmojis }) => {
  const styles = reactCSS({
    'default': {
      sections: {
        padding: '4px 4px 0',
        background: '#fff',
      },
      wrap: {
        maxHeight: scrollHeight,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '4px 4px 8px',
      },
    },
  })

  return (
    <div style={ styles.sections }>
      <div style={ styles.wrap } className="frame">
        { frequent ? (
          <SlackSelectorSection
            key="mine"
            slug="mine"
            emojis={ frequent }
            onSelect={ onSelect }
          />
        ) : null }
        { _.map(emoji, (group, slug) => {
          return (
            <SlackSelectorSection
              key={ slug }
              slug={ slug }
              emojis={ _.without(group, ...removeEmojis) }
              onSelect={ onSelect }
            />
          )
        }) }
      </div>
    </div>
  )
}

export default SlackSelectorItems
