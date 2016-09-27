import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import { slackEmojiColors } from '../../helpers/colors'

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
    },
  })

  return (
    <div style={ styles.section }>
      <div style={ styles.emojis }>
        { _.map(props.emojis, (emoji, i) => {
          return (
            <SlackSelectorSectionEmoji
              hoverColor={ slackEmojiColors[i % slackEmojiColors.length] }
              emoji={ emoji }
              key={ i }
            />
          )
        }) }
      </div>
    </div>
  )
}

export default SlackSelectorSection
