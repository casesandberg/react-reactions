import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import emoji from 'emoji-as-array'

import SlackSelectorSection from './SlackSelectorSection'

export const SlackSelectorItems = (props) => {
  const styles = reactCSS({
    'default': {
      sections: {
        padding: '4px 4px 0',
        background: '#fff',
      },
      wrap: {
        maxHeight: '220px',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '4px 4px 8px',
      },
    },
  })

  return (
    <div style={ styles.sections }>
      <div style={ styles.wrap } className="frame">
        { props.frequent ? (
          <SlackSelectorSection
            key="mine"
            slug="mine"
            emojis={ props.frequent }
            onSelect={ props.onSelect }
          />
        ) : null }
        { _.map(emoji, (group, slug) => {
          return (
            <SlackSelectorSection
              key={ slug }
              slug={ slug }
              emojis={ _.without(group, ...props.removeEmojis) }
              onSelect={ props.onSelect }
            />
          )
        }) }
      </div>
    </div>
  )
}

export default SlackSelectorItems
