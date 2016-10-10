import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import { listOfNames } from '../../helpers/strings'

import FacebookCounterReaction from './FacebookCounterReaction'

export const FacebookCounter = (props) => {
  const styles = reactCSS({
    'default': {
      counter: {
        display: 'flex',
        cursor: 'pointer',
        color: '#365899',
        fontFamily: `"San Francisco", -apple-system, BlinkMacSystemFont,
          ".SFNSText-Regular", sans-serif`,
        fontSize: '12px',
        fontWeight: '500',
      },
      name: {
        paddingLeft: '4px',
      },
    },
  })

  const groups = _.groupBy(props.counters, 'emoji')
  const names = _.map(props.counters, 'by')

  const nameString = []
  if (_.includes(names, props.user)) {
    nameString.push('You')
  }
  if (props.important.length) {
    if (_.includes(names, props.important[0])) {
      nameString.push(props.important[0])
    }
  }
  nameString.push(`${ names.length - nameString.length } others`)


  return (
    <div style={ styles.counter } onClick={ props.onClick }>
      { _.map(_.keys(groups), (reaction, i, reactions) => {
        return (
          <FacebookCounterReaction
            key={ i }
            reaction={ reaction }
            index={ reactions.length - i }
            bg={ props.bg }
          />
        )
      }) }
      <div style={ styles.name }>
        { listOfNames(nameString) }
      </div>
    </div>
  )
}

FacebookCounter.defaultProps = {
  important: [],
  bg: '#fff',
}

export default FacebookCounter
