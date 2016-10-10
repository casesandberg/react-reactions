/* eslint-disable no-shadow */

import React from 'react'
import reactCSS, { hover } from 'reactcss'
import active from '../../helpers/active'

export const GithubSelectorEmoji = ({ onSelect, shortcode, hover, active }) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        padding: '8px 0',
      },
      emoji: {
        width: '34px',
        textAlign: 'center',
        lineHeight: '29px',
        fontSize: '21px',
        fontFamily: '"Apple Color Emoji", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol"',
        cursor: 'pointer',

        transform: 'scale(1)',
        transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.13, 2)',
      },
    },
    'hover': {
      emoji: {
        transform: 'scale(1.2)',
      },
    },
    'active': {
      wrap: {
        backgroundColor: '#f2f8fa',
      },
    },
  }, { hover, active })

  const handleClick = () => {
    onSelect(shortcode)
  }

  return (
    <div style={ styles.wrap } onClick={ handleClick }>
      <div style={ styles.emoji }>
        { shortcode }
      </div>
    </div>
  )
}

export default hover(active(GithubSelectorEmoji))
