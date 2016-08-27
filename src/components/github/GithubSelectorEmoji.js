import React from 'react'
import reactCSS, { hover } from 'reactcss'

export const GithubSelectorEmoji = (props) => {
  const styles = reactCSS({
    'default': {
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
  }, props)

  return (
    <div style={ styles.emoji }>
      { props.emoji }
    </div>
  )
}

export default hover(GithubSelectorEmoji)
