import React from 'react'
import reactCSS from 'reactcss'

import { FacebookCounter, FacebookSelector, GithubCounter, GithubSelector,
  PokemonSelector, SlackCounter, SlackSelector } from 'react-reactions'

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
          <FacebookCounter
            counters={ [{
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
            }] }
            user="Case Sandberg"
            important={ ['Henry Boldizsar', 'Rob Sandberg'] }
          />
          <br />
          <br />

        </div>
        <div style={ styles.slack }>
          youtube
          <SlackCounter
            counters={ [{
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
            }] }
            user="case"
            onAdd={ handleGithubAdd }
            onSelect={ handleSelect }
          />
        </div>
      </div>
    </div>
  )
}

export default Index
