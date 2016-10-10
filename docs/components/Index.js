import React from 'react'
import reactCSS from 'reactcss'

import { FacebookSelector, GithubCounter, GithubSelector,
  PokemonSelector, SlackSelector } from 'react-reactions'

export const Index = () => {
  const styles = reactCSS({
    'default': {
      index: {
        padding: '20px',
        display: 'flex',
      },
      githubSelector: {
        marginRight: '40px',
      },
    },
  })

  const handleSelect = (emoji) => {
    console.log(emoji)
  }

  const handleGithubAdd = () => {
    console.log('POPUP GITHUB')
  }

  return (
    <div>
      <div style={ styles.index }>
        <div style={ styles.githubSelector }>
          <GithubSelector onSelect={ handleSelect } />
          <br />
          <br />
          <br />
          <br />
          <FacebookSelector onSelect={ handleSelect } />
          <br />
          <br />
          <br />
          <PokemonSelector onSelect={ handleSelect } />
          <br />
          <br />

        </div>
        <div style={ styles.slack }>
          <SlackSelector onSelect={ handleSelect } />
        </div>
      </div>
      <div style={ styles.index }>
        <div style={ styles.githubSelector }>
          <div style={{ width: '230px' }}>
            <GithubCounter
              counters={ [{
                emoji: '👍',
                by: 'case',
              }, {
                emoji: '👍',
                by: 'roasbeef',
              }, {
                emoji: '❤️',
                by: 'joseph',
              }] }
              user="case"
              onAdd={ handleGithubAdd }
              onSelect={ handleSelect }
            />
          </div>
          <br />
          <br />
          <br />
          facebook
          <br />
          <br />

        </div>
        <div style={ styles.slack }>
          youtube
          slack
        </div>
      </div>
    </div>
  )
}

export default Index
