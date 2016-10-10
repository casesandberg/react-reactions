/* eslint-disable no-shadow */

import React from 'react'
import reactCSS, { hover } from 'reactcss'
import _ from 'lodash'

import SlackCounterGroup from './SlackCounterGroup'

export const SlackCounter = ({ hover, counters, user, onSelect, onAdd }) => {
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
  }, { hover })

  const groups = _.groupBy(counters, 'emoji')


  return (
    <div style={ styles.counter }>
      { _.map(groups, (c, emoji) => {
        const names = _.map(c, 'by')
        return (
          <div style={ styles.group } key={ emoji }>
            <SlackCounterGroup
              emoji={ emoji }
              count={ c.length }
              names={ names }
              active={ _.includes(names, user) }
              onSelect={ onSelect }
            />
          </div>
        )
      }) }
      <div style={ styles.add } onClick={ onAdd }>

        <SlackCounterGroup emoji={ '' } />
      </div>
    </div>
  )
}

export default hover(SlackCounter)
