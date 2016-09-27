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

  return (
    <div style={ styles.index }>
      <div style={ styles.githubSelector }>
        <GithubSelector />
        <br />
        <br />
        <br />
        <br />
        <FacebookSelector />
        <br />
        <br />
        <br />
        <PokemonSelector />
        <br />
        <br />

      </div>
      <div style={ styles.slack }>
        <SlackSelector />
      </div>
    </div>
  )
}

export default Index
