import React from 'react'
import reactCSS from 'reactcss'
import icons from '../../src/helpers/icons'

import Markdown from 'react-mark'
import Code from './Code'
import InlineCode from './InlineCode'

import documentation from '../../README.md'

import { FacebookCounter, FacebookSelector, GithubSelector,
  PokemonSelector, SlackSelector } from 'react-reactions'
import TitleWrap from './TitleWrap'
import Header from './Header'
import Youtube from '../../examples/Youtube'
import Github from '../../examples/Github'
import Slack from '../../examples/Slack'

export const Index = (props) => {
  const styles = reactCSS({
    'default': {
      index: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
      },
      githubSelector: {
        marginRight: '40px',
        maxWidth: '292px',
      },
      countersFlex: {
        marginRight: '40px',
        maxWidth: '330px',
      },
      space: {
        height: '60px',
      },
      githubLink: {
        padding: '15px',
        width: '24px',
        position: 'fixed',
        top: '0',
        right: '0',
        fill: 'rgba(0,0,0,.3)',
        cursor: 'pointer',
      },
      slack: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      },
      counters: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      docs: {
        display: 'flex',
        justifyContent: 'center',
      },
      docsWrap: {
        width: '690px',
      },
      cover: {
        position: 'absolute',
        background: 'rgba(255, 97, 26, 0.5)',
        top: '0',
        left: '0',
        right: '0',
        height: '405px',
      },
      head: {
        position: 'relative',
        fontFamily: 'Roboto, Helvetica',
      },
      title: {
        fontSize: '52px',
        color: '#fff',
        whiteSpace: 'nowrap',
      },
      subtitle: {
        fontSize: '20px',
        lineHeight: '27px',
        color: 'rgba(0, 0, 0, 0.4)',
        padding: '37px 0',
        fontWeight: '300',
        maxWidth: '292px',
      },
      stars: {
        height: '30px',
      },
    },
  })

  const handleSelect = (emoji) => props.onEmojiChange(emoji)
  const handleFBSelect = (name) => props.onEmojiChange(icons.find('facebook', name))
  const handlePMSelect = (name) => props.onEmojiChange(icons.find('pokemon', name))

  return (
    <div>
      <div style={ styles.space } />
      <div style={ styles.cover } />

      <a style={ styles.githubLink } href="https://github.com/casesandberg/react-reactions" target="__blank">
        <svg viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </a>

      <div style={ styles.index }>
        <div style={ styles.githubSelector }>

          <div style={ styles.head }>
            <div style={ styles.title }>React Reactions</div>
            <div style={ styles.subtitle }>
              Reaction pickers and counters from Slack, Pokemon, Github, Facebook & Youtube
            </div>
            <div style={ styles.stars }>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-reactions&type=star&count=true&size=large"
                scrolling="0"
                width="160px"
                height="30px"
                frameBorder="0"
              ></iframe>
            </div>
          </div>

          <div style={ styles.space } />

          <TitleWrap
            title="Pokemon"
            footer={ (
              <a
                href="https://dribbble.com/monkee1895"
                target="__blank"
                style={{ textDecoration: 'none', color: '#ccc' }}
              >
                Illustrations by Chris Owens
              </a>
            ) }
          >
            <PokemonSelector onSelect={ handlePMSelect } />
          </TitleWrap>

          <div style={ styles.space } />

          <TitleWrap title="Facebook">
            <FacebookSelector onSelect={ handleFBSelect } />
          </TitleWrap>

        </div>
        <div style={ styles.slack }>
          <TitleWrap title="Github">
            <GithubSelector onSelect={ handleSelect } />
          </TitleWrap>

          <div style={ styles.space } />

          <TitleWrap title="Slack">
            <SlackSelector scrollHeight="213px" onSelect={ handleSelect } />
          </TitleWrap>
        </div>
      </div>

      <Header>Counters</Header>

      <div style={ styles.index }>
        <div style={ styles.countersFlex }>

          <TitleWrap title="Github">
            <Github />
          </TitleWrap>

          <div style={ styles.space } />

          <TitleWrap title="Facebook">
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
            />
          </TitleWrap>
        </div>

        <div style={ styles.counters }>

          <TitleWrap title="Youtube">
            <div style={{ height: '38px' }}>
              <Youtube />
            </div>
          </TitleWrap>

          <div style={ styles.space } />

          <TitleWrap title="Slack">
            <Slack />
          </TitleWrap>
        </div>
      </div>

      <Header color="#999">
        Docs
      </Header>

      <div style={ styles.docs }>
        <div style={ styles.docsWrap }>
          <Markdown text={ documentation } replace={{ pre: Code, code: InlineCode }} />
        </div>
      </div>
    </div>
  )
}

export default Index
