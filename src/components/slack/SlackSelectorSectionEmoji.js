/* eslint-disable no-shadow */

import React from 'react'
import reactCSS, { hover } from 'reactcss'

export const SlackSelectorSectionEmoji = ({ hoverColor, onSelect, emoji, hover }) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        width: '36px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 1px 1px 0',
        borderRadius: '6px',
        cursor: 'pointer',

        transition: 'background .15s ease-out 50ms',
      },
      emoji: {
        fontSize: '22px',
        width: '22px',
        height: '22px',
        lineHeight: '26px',
      },
    },
    'hover': {
      wrap: {
        background: hoverColor,
      },
    },
  }, { hover })

  const handleClick = () => {
    onSelect(emoji)
  }

  return (
    <div style={ styles.wrap } onClick={ handleClick }>
      <div style={ styles.emoji }>
        { emoji }
      </div>
    </div>
  )
}

export default hover(SlackSelectorSectionEmoji)
