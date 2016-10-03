import React from 'react'
import reactCSS, { hover } from 'reactcss'

export const SlackSelectorHeaderTab = (props) => {
  const styles = reactCSS({
    'default': {
      tab: {
        color: '#9e9ea6',
        padding: '5px 8px 7px',
        borderRadius: '6px 6px 0 0',
        marginRight: '1px',
        borderBottom: '3px solid tranlsparent',
        cursor: 'pointer',
      },
      icon: {
        width: '20px',
        height: '18px',
        fontFamily: 'Slack',
        fontSize: '20px',
        WebkitFontSmoothing: 'antialiased',
      },
    },
    'hover': {
      tab: {
        color: '#555459',
      },
    },
    'active': {
      tab: {
        color: '#9e9ea6',
        borderBottom: '3px solid #2ab27b',
      },
    },
  }, props)

  const handleClick = () => {
    props.onClick && props.onClick(props.id)
  }

  return (
    <div style={ styles.tab } onClick={ handleClick }>
      <div style={ styles.icon }>
        { props.icon }
      </div>
    </div>
  )
}

export default hover(SlackSelectorHeaderTab)
