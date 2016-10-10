import React from 'react'
import reactCSS from 'reactcss'
import icons from '../../helpers/icons'

export const FacebookCounterReaction = (props) => {
  const styles = reactCSS({
    'default': {
      reaction: {
        width: '16px',
        height: '16px',
        backgroundSize: '100% 100%',
        borderRadius: '8px',
        backgroundImage: `url(${ icons.find('facebook', props.reaction) })`,
        boxShadow: '0 0 0 2px #fff',
        position: 'relative',
        zIndex: props.index,
      },
    },
  })
  return (
    <div style={ styles.reaction } />
  )
}

export default FacebookCounterReaction
