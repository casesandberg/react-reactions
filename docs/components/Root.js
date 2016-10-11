import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'

import Index from './Index'

export class Root extends React.Component {
  constructor() {
    super()

    this.hideEmoji = _.debounce(() => {
      this.setState({ visible: false })
    }, 3000)
  }
  state = {
    emoji: '🗿',
    visible: false,
  }

  handleEmojiChange = (emoji) => {
    this.setState({ emoji, visible: true })
    this.hideEmoji()
  }

  render() {
    const styles = reactCSS({
      'default': {
        popup: {
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          width: '54px',
          height: '54px',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '30px',
          lineHeight: '62px',
          background: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.1)',
          borderRadius: '4px',

          transform: 'translateY(10px)',
          opacity: '0',
          transition: 'all 100ms ease-out',
        },
        image: {
          width: '26px',
          height: '26px',
          backgroundImage: `url(${ this.state.emoji })`,
          backgroundSize: '100%',
          marginTop: '25%',
        },
      },
      'visible': {
        popup: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    }, { 'visible': this.state.visible })

    return (
      <div>
        <Index onEmojiChange={ this.handleEmojiChange } />
        <div style={ styles.popup }>
          { this.state.emoji.length < 5 ? this.state.emoji : (
            <div style={ styles.image } />
          ) }
        </div>
      </div>
    )
  }
}

export default Root
