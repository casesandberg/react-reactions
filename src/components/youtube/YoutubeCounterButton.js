/* eslint-disable no-shadow */

import React from 'react'
import reactCSS, { hover } from 'reactcss'

export const YoutubeCounterButton = ({ position, number, hover, tooltip, onClick }) => {
  const styles = reactCSS({
    'default': {
      button: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Roboto,arial,sans-serif',
        fontSize: '11px',
        opacity: '0.5',
        cursor: 'pointer',
        position: 'relative',
      },
      icon: {
        background: `no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflaXbyPz.webp) ${ position }`, // eslint-disable-line
        backgroundSize: '573px 310px',
        width: '20px',
        height: '20px',
        marginRight: '6px',
      },
      tooltip: {
        color: '#fff',
        background: 'rgba(0,0,0,0.8)',
        borderRadius: '3px',
        padding: '5px 8px',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginBottom: '4px',
        whiteSpace: 'nowrap',

        opacity: '0',
        transition: 'opacity 0.1s ease-in-out',
      },
    },
    'hover': {
      button: {
        opacity: '0.7',
      },
      tooltip: {
        opacity: '1',
      },
    },
  }, { hover })


  return (
    <div style={ styles.button } onClick={ onClick }>
      <div style={ styles.icon } />
      { parseInt(number, 10).toLocaleString() }
      <div style={ styles.tooltip }>{ tooltip }</div>
    </div>
  )
}

export default hover(YoutubeCounterButton)
