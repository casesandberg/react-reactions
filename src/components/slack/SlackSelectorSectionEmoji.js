import React from 'react'
import reactCSS from 'reactcss'

export const SlackSelectorSectionEmoji = (props) => {
  const styles = reactCSS({
    'default': {
      emoji: {
        fontSize: '22px',
        width: '22px',
        height: '22px',
        lineHeight: '26px',
      },
    },
  })

  return (
    <div style={ styles.emoji }>
      { props.emoji }
    </div>
  )
}

export default SlackSelectorSectionEmoji
