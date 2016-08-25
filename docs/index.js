import ReactDOM from 'react-dom'
import React from 'react'
import '../node_modules/normalize.css/normalize.css'

import REACTIONS from 'react-reactions'

ReactDOM.render(
  React.createElement('div', {}, REACTIONS),
  document.getElementById('root')
)
