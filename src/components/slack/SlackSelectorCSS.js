import React from 'react'

export const SlackSelectorCSS = () => {
  return (
    <style
      dangerouslySetInnerHTML={{ __html: `

        @font-face {
          font-family: Slack;
          src: url(fonts/slack-icons-Regular.eot);
          src: url(fonts/slack-icons-Regular.eot?#iefix) format('embedded-opentype'),
               url(fonts/slack-icons-Regular.woff) format('woff'),
               url(fonts/slack-icons-Regular.ttf) format('truetype')
        }
        .frame::-webkit-scrollbar {
            -webkit-appearance: none;
        }

        .frame::-webkit-scrollbar:vertical {
            width: 8px;
        }

        .frame::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #D9D9DE;
            box-shadow: 0 0 0 3px #fff;
            height: 30px;
        }

        .frame::-webkit-scrollbar-track {
            background-color: #F3F3F3;
            border-radius: 4px;
        }

      ` }}
    />
  )
}

export default SlackSelectorCSS
