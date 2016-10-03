import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import { emojiColors, sectionSlugToName } from '../../helpers/slack'

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
      title: {
        fontWeight: '600',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '16px',
        lineHeight: '1.5rem',
        margin: '0 6px',
      },
    },
  })

  return (
    <div style={ styles.section } id={ props.slug }>
      <div style={ styles.title }>{ sectionSlugToName(props.slug) }</div>
      <div style={ styles.emojis }>
        { _.map(props.emojis, (emoji, i) => {
          return (
            <SlackSelectorSectionEmoji
              hoverColor={ emojiColors[i % emojiColors.length] }
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
