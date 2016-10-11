import React from 'react'
import { YoutubeCounter } from 'react-reactions'

export class Youtube extends React.Component {
  state = {
    like: 135757,
    dislike: 1638,
    user: {
      like: 0,
      dislike: 0,
    },
  }

  handleLikeClick = () => {
    if (this.state.user.like) {
      this.setState({ ...this.state, user: { like: 0, dislike: 0 } })
    } else {
      this.setState({ ...this.state, user: { like: 1, dislike: 0 } })
    }
  }
  handleDislikeClick = () => {
    if (this.state.user.dislike) {
      this.setState({ ...this.state, user: { like: 0, dislike: 0 } })
    } else {
      this.setState({ ...this.state, user: { like: 0, dislike: 1 } })
    }
  }

  render() {
    return (
      <YoutubeCounter
        like={ this.state.like + this.state.user.like }
        dislike={ this.state.dislike + this.state.user.dislike }
        didLike={ !!this.state.user.like }
        didDislike={ !!this.state.user.dislike }
        onLikeClick={ this.handleLikeClick }
        onDislikeClick={ this.handleDislikeClick }
      />
    )
  }
}

export default Youtube
