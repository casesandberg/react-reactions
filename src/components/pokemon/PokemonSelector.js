import React from 'react'

import FacebookSelector from '../facebook/FacebookSelector'

export const PokemonSelector = ({ reactions, iconSize, onSelect }) => {
  return (
    <FacebookSelector
      reactions={ reactions }
      variant="pokemon"
      iconSize={ iconSize }
      onSelect={ onSelect }
    />
  )
}

PokemonSelector.defaultProps = {
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
  iconSize: 38,
}

export default PokemonSelector
