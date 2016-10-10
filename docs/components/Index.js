import React from 'react'
import reactCSS from 'reactcss'

import { FacebookCounter, FacebookSelector, GithubCounter, GithubSelector,
  PokemonSelector, SlackCounter, SlackSelector, YoutubeCounter } from 'react-reactions'
import TitleWrap from './TitleWrap'

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
      space: {
        height: '60px',
      },
    },
  })

  const handleSelect = (emoji) => console.log(emoji)
  const handleGithubAdd = () => console.log('POPUP GITHUB')
  const handleSlackAdd = () => console.log('POPUP SLACK')
  const handleLikeClick = () => console.log('LIKE CLICK')
  const handleDislikeClick = () => console.log('DISLIKE CLICK')
  const handleFacebookClick = () => console.log('FACEBOOK CLICK')

  return (
    <div>
      <br />
      <br />
      <br />
      <div style={ styles.index }>
        <div style={ styles.githubSelector }>

          <TitleWrap title="Github">
            <GithubSelector onSelect={ handleSelect } />
          </TitleWrap>

          <div style={ styles.space } />

          <TitleWrap
            title="Pokemon"
            footer={ (
              <a
                href="#"
                target="__blank"
                style={{ textDecoration: 'none', color: '#ccc' }}
              >
                Illustrations by Chris Owens
              </a>
            ) }
          >
            <PokemonSelector onSelect={ handleSelect } />
          </TitleWrap>

          <div style={ styles.space } />

          <TitleWrap title="Facebook">
            <FacebookSelector onSelect={ handleSelect } />
          </TitleWrap>

        </div>
        <div style={ styles.slack }>
          <TitleWrap title="Slack">
            <SlackSelector scrollHeight="213px" onSelect={ handleSelect } />
          </TitleWrap>
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
            bg="#fafafa"
            user="Case Sandberg"
            important={ ['Henry Boldizsar', 'Rob Sandberg'] }
            onClick={ handleFacebookClick }
          />
          <br />
          <br />

        </div>
        <div style={ styles.slack }>
          <YoutubeCounter
            like="135757"
            dislike="1638"
            onLikeClick={ handleLikeClick }
            onDislikeClick={ handleDislikeClick }
          />
          <br />
          <br />
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
            onAdd={ handleSlackAdd }
            onSelect={ handleSelect }
          />
        </div>
      </div>
    </div>
  )
}

export default Index
