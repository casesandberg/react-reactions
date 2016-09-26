import React from 'react'
import reactCSS from 'reactcss'

import { FacebookSelector, GithubSelector, PokemonSelector } from 'react-reactions'

export const Index = () => {
  const styles = reactCSS({
    'default': {
      index: {
        padding: '20px',
      },
      githubSelector: {
        position: 'absolute',
      },
    },
  })

  return (
    <div style={ styles.index }>
      <div style={ styles.githubSelector }>
        <GithubSelector />
        <br />
        <br />
        <FacebookSelector />
        <br />
        <br />
        <PokemonSelector />
      </div>
    </div>
  )
}

export default Index
