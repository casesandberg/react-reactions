import React from 'react'
import reactCSS from 'reactcss'
import { generate } from 'shortid'

import Highlight from 'react-highlight'

export const Code = (props) => {
  const styles = reactCSS({
    'default': {
      code: {
        background: 'rgba(0,0,0,.05)',
        padding: '15px',
        fontFamily: 'Consolas, Monaco, Andale Mono, monospace',
        lineHeight: '1.5',
        fontSize: '14px',
        borderRadius: '4px',
        margin: '20px 0',
        display: 'flex',
      },
      numbers: {
        minWidth: '34px',
      },
      number: {
        color: '#ccc',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
      },
      text: {
        height: '21px',
      },
    },
  })
  const code = props.children[0]
  return (
    <div style={ styles.code } className="codeblock">
      <div style={ styles.numbers }>
        { code.split('\n').map((lineText, i) => {
          return <div style={ styles.number } key={ generate() }>{ i + 1 }</div>
        }) }
      </div>
      <div style={ styles.numbers }>
        { code.split('\n').map((lineText) => {
          return (
            <pre style={ styles.text } key={ generate() }>
              <Highlight className="javascript">{ lineText }</Highlight>
            </pre>
          )
        }) }
      </div>
    </div>
  )
}

export default Code
