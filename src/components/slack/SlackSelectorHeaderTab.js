import React from 'react'
import reactCSS from 'reactcss'

export const SlackSelectorHeaderTab = () => {
  const styles = reactCSS({
    'default': {
      tab: {
        color: '#9e9ea6',
        padding: '4px 6px 6px',
        borderRadius: '6px 6px 0 0',
        marginRight: '3px',
        borderBottom: '3px solid transparent',
      },
      icon: {
        width: '20px',
        height: '18px',
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
        paddingTop: '3px',
        borderBottom: '3px solid #2ab27b',
      },
    },
  })

  return (
    <div style={ styles.tab }>
      <div style={ styles.icon }>
        i
      </div>
    </div>
  )
}

export default SlackSelectorHeaderTab
