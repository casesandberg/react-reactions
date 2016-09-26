import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'

import SlackSelectorSectionEmoji from './SlackSelectorSectionEmoji'

export const SlackSelectorSection = (props) => {
  const styles = reactCSS({
    'default': {
      section: {

      },
      emojis: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      emoji: {
        width: '36px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  })

  return (
    <div style={ styles.section }>
      <div style={ styles.emojis }>
        { _.map(props.emojis, (emoji, i) => {
          return (
            <div style={ styles.emoji }>
              <SlackSelectorSectionEmoji emoji={ emoji } key={ i } />
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default SlackSelectorSection
