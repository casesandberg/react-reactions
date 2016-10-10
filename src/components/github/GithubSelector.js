import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'

import GithubSelectorEmoji from './GithubSelectorEmoji'

export const GithubSelector = (props) => {
  const styles = reactCSS({
    'default': {
      selector: {
        paddingTop: '5px',
        backgroundColor: '#fff',
        border: '1px solid rgba(0,0,0,0.15)',
        borderRadius: '4px',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        display: 'inline-block',
      },
      label: {
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#767676',
        margin: '6px 12px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica',
      },
      divider: {
        height: '1px',
        margin: '8px 1px 0px',
        backgroundColor: '#e5e5e5',
      },
      emoji: {
        display: 'flex',
        margin: '0 6px',
      },
    },
  })

  return (
    <div style={ styles.selector }>
      <p style={ styles.label }>Pick your reaction</p>
      <div style={ styles.divider } />
      <div style={ styles.emoji }>
        { _.map(props.reactions, (reaction, i) => {
          return (
            <GithubSelectorEmoji
              key={ i }
              shortcode={ reaction }
              onSelect={ props.onSelect }
            />
          )
        }) }
      </div>
    </div>
  )
}

GithubSelector.defaultProps = {
  reactions: ['👍', '👎', '😄', '🎉', '😕', '❤️'],
}

export default GithubSelector
