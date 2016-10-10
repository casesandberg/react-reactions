import React from 'react'
import reactCSS, { hover } from 'reactcss'

export const GithubCounterGroup = (props) => {
  const styles = reactCSS({
    'default': {
      group: {
        width: '35px',
        height: '20px',
        padding: '8px 15px',
        borderRight: '1px solid #ddd',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica',
        fontSize: '14px',
        color: '#3D76C2',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '3px 0 0 3px',
      },
      emoji: {
        fontSize: '21px',
        marginTop: '1px',
      },
      tooltip: {
        maxWidth: '250px',
        wordBreak: 'break-word',
        wordWrap: 'normal',
        whiteSpace: 'nowrap',
        font: `normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        color: '#fff',
        background: 'rgba(0,0,0,0.8)',
        borderRadius: '3px',
        padding: '5px 8px',
        position: 'absolute',
        top: '100%',
        left: '15px',
        marginTop: '4px',

        opacity: '0',
        transition: 'opacity 0.1s ease-in-out',
      },
    },
    'hover': {
      tooltip: {
        opacity: '1',
      },
    },
    'active': {
      group: {
        background: '#f2f8fa',
      },
    },
  }, { hover: props.hover, active: props.active })

  const handleClick = () => {
    props.onSelect(props.emoji)
  }

  return (
    <div style={ styles.group } onClick={ handleClick }>
      <span style={ styles.emoji }>{ props.emoji }</span> { props.count }
      <div style={ styles.tooltip }>{ props.names.join(', ') }</div>
    </div>
  )
}

export default hover(GithubCounterGroup)
