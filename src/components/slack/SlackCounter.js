import React from 'react'
import reactCSS, { hover } from 'reactcss'
import _ from 'lodash'

import SlackCounterGroup from './SlackCounterGroup'

export const SlackCounter = (props) => {
  const styles = reactCSS({
    'default': {
      counter: {
        display: 'flex',
      },
      add: {
        cursor: 'pointer',
        fontFamily: 'Slack',
        paddingLeft: '8px',

        opacity: '0',
        transition: 'opacity 0.1s ease-in-out',
      },
      group: {
        marginRight: '4px',
      },
    },
    'hover': {
      add: {
        opacity: '1',
      },
    },
  }, { hover: props.hover })

  const groups = _.groupBy(props.counters, 'emoji')


  return (
    <div style={ styles.counter }>
      { _.map(groups, (counters, emoji) => {
        const names = _.map(counters, 'by')
        return (
          <div style={ styles.group } key={ emoji }>
            <SlackCounterGroup
              emoji={ emoji }
              count={ counters.length }
              names={ names }
              active={ _.includes(names, props.user) }
              onSelect={ props.onSelect }
            />
          </div>
        )
      }) }
      <div style={ styles.add } onClick={ props.onAdd }>

        <SlackCounterGroup emoji={ '' } />
      </div>
    </div>
  )
}

export default hover(SlackCounter)
