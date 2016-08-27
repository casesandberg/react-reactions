import React from 'react'
import reactCSS from 'reactcss'

import { GithubSelector } from 'react-reactions'

export const Index = () => {
  const styles = reactCSS({
    'default': {
      index: {

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
      </div>
    </div>
  )
}

export default Index
