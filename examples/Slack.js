import React from 'react'
import _ from 'lodash'
import { SlackCounter, SlackSelector } from 'react-reactions'

export class Slack extends React.Component {
  state = {
    counters: [{
      emoji: '🌊',
      by: 'roasbeef',
    }, {
      emoji: '🗿',
      by: 'case',
    }, {
      emoji: '🗿',
      by: 'joseph',
    }, {
      emoji: '🌊',
      by: 'stark',
    }, {
      emoji: '💪',
      by: 'henry',
    }],
    user: 'case',
    showSelector: false,
  }

  handleAdd = () => this.setState({ showSelector: true })

  handleSelect = (emoji) => {
    const index = _.findIndex(this.state.counters, { emoji, by: this.state.user })
    if (index > -1) {
      this.setState({
        counters: [...this.state.counters.slice(0, index), ...this.state.counters.slice(index + 1)],
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
        <SlackCounter
          counters={ this.state.counters }
          user={ this.state.user }
          onAdd={ this.handleAdd }
          onSelect={ this.handleSelect }
        />

      { this.state.showSelector ? (
        <div style={{ position: 'absolute', bottom: '100%', marginBottom: '10px' }}>
          <SlackSelector onSelect={ this.handleSelect } />
        </div>
      ) : null }
      </div>
    )
  }
}

export default Slack
