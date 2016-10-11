import React from 'react'
import _ from 'lodash'
import { FacebookCounter, FacebookSelector } from 'react-reactions'

export class Facebook extends React.Component {
  state = {
    counters: [{
      emoji: 'like',
      by: 'Case Sandberg',
    }, {
      emoji: 'like',
      by: 'Henry Boldizsar',
    }, {
      emoji: 'like',
      by: 'Joseph Poon',
    }, {
      emoji: 'like',
      by: 'Elizabeth Stark',
    }, {
      emoji: 'like',
      by: 'Cameron Gillard',
    }, {
      emoji: 'love',
      by: 'Rob Sandberg',
    }],
    user: 'Case Sandberg',
    showSelector: false,
  }

  handleAdd = () => this.setState({ showSelector: true })

  handleSelect = (emoji) => {
    const index = _.findIndex(this.state.counters, { by: this.state.user })
    if (index > -1) {
      this.setState({
        counters: [
          ...this.state.counters.slice(0, index),
          { emoji, by: this.state.user },
          ...this.state.counters.slice(index + 1),
        ],
        showSelector: false,
      })
    } else {
      this.setState({
        counters: [...this.state.counters, { emoji, by: this.state.user }],
        showSelector: false,
      })
    }
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <FacebookCounter
          counters={ this.state.counters }
          user={ this.state.user }
          onClick={ this.handleAdd }
          bg="#fafafa"
          important={ ['Henry Boldizsar', 'Rob Sandberg'] }
        />

      { this.state.showSelector ? (
        <div style={{ position: 'absolute', bottom: '100%', marginBottom: '10px' }}>
          <FacebookSelector onSelect={ this.handleSelect } />
        </div>
      ) : null }
      </div>
    )
  }
}

export default Facebook
