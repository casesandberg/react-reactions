import React from 'react'
import reactCSS from 'reactcss'

import { FacebookSelector, GithubSelector, PokemonSelector, SlackSelector } from 'react-reactions'

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

  return (
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
  )
}

export default Index
