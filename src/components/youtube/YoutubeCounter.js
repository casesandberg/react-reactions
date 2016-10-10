import React from 'react'
import reactCSS from 'reactcss'

import YoutubeCounterButton from './YoutubeCounterButton'

export const YoutubeCounter = ({ like, dislike }) => {
  const styles = reactCSS({
    'default': {
      counter: {
        display: 'flex',
      },
      space: {
        width: '12px',
      },
    },
  })


  return (
    <div style={ styles.counter }>
      <YoutubeCounterButton
        number={ like }
        position="-66px -69px"
        tooltip="I like this"
      />
      <div style={ styles.space } />
      <YoutubeCounterButton
        number={ dislike }
        position="-390px -148px"
        tooltip="I dislike this"
      />
    </div>
  )
}

export default YoutubeCounter
