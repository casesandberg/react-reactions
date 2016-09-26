import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import icons from '../../helpers/icons'

import FacebookSelectorEmoji from './FacebookSelectorEmoji'

const bgColors = {
  like: '#5890ff',
  love: '#f25268',
  haha: '#f0ba15',
  wow: '#f0ba15',
  sad: '#f0ba15',
  angry: '#f7714b',
}

export const FacebookSelector = (props) => {
  const styles = reactCSS({
    'default': {
      selector: {
        backgroundColor: '#fff',
        borderRadius: '50px',
        padding: '2px',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .15)',
        display: 'flex',
      },
      icon: {
        width: `${ props.iconSize + 10 }px`,
      },
    },
  })

  return (
    <div style={ styles.selector }>
      { _.map(props.reactions, (reaction, i) => {
        return (
          <div style={ styles.icon }>
            <FacebookSelectorEmoji
              icon={ icons.find('facebook', reaction) }
              label={ reaction }
              bg={ bgColors[reaction] }
              key={ i }
            />
          </div>
        )
      }) }
    </div>
  )
}

FacebookSelector.defaultProps = {
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
  iconSize: 38,
}

export default FacebookSelector
