import React from 'react'

import FacebookSelector from '../facebook/FacebookSelector'

export const PokemonSelector = (props) => {
  return (
    <FacebookSelector
      reactions={ props.reactions }
      variant="pokemon"
      iconSize={ props.iconSize }
    />
  )
}

PokemonSelector.defaultProps = {
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
  iconSize: 38,
}

export default PokemonSelector
