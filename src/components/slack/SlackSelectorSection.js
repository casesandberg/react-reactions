import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import { emojiColors, sectionSlugToName } from '../../helpers/slack'

import SlackSelectorSectionEmoji from './SlackSelectorSectionEmoji'

export const SlackSelectorSection = ({ slug, emojis, onSelect }) => {
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
    <div style={ styles.section } id={ slug }>
      <div style={ styles.title }>{ sectionSlugToName(slug) }</div>
      <div style={ styles.emojis }>
        { _.map(emojis, (emoji, i) => {
          return (
            <SlackSelectorSectionEmoji
              key={ i }
              hoverColor={ emojiColors[i % emojiColors.length] }
              emoji={ emoji }
              onSelect={ onSelect }
            />
          )
        }) }
      </div>
    </div>
  )
}

export default SlackSelectorSection
