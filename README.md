# [React Reactions](http://casesandberg.github.io/react-reactions/)

* **4 Different Selectors** - Slack, Facebook, Pokemon and Github
* **4 Different Counters** - Github, Youtube, Facebook and Slack

---

```
npm install react-reactions --save
```

## Selectors

### Slack
```
import React from 'react';
import { SlackSelector } from 'react-reactions';

const Component = () => {
  return (
    <SlackSelector />
  )
}
```
**Props:**

`active`: String of active tab. Defaults to `mine`

`scrollHeight`: String pixel height of scroll container. Defaults to `270px`

`removeEmojis`: Array of emojis to remove from emoji list

`frequent`: Array of emojis to set Frequently Used. Defaults to `['👍', '🐉', '🙌', '🗿', '😊', '🐬', '😹', '👻', '🚀', '🚁', '🏇', '🇨🇦']`

`onSelect`: Function callback when emoji is selected

---

### Github
```
import React from 'react';
import { GithubSelector } from 'react-reactions';

const Component = () => {
  return (
    <GithubSelector />
  )
}
```
**Props:**

`reactions`: Array of emoji to dispay. Defaults to `['👍', '👎', '😄', '🎉', '😕', '❤️']`

`onSelect`: Function callback when emoji is selected

---

### Facebook
```
import React from 'react';
import { FacebookSelector } from 'react-reactions';

const Component = () => {
  return (
    <FacebookSelector />
  )
}
```
**Props:**

`reactions`: Array of strings for reactions to display. Defaults to `['like', 'love', 'haha', 'wow', 'sad', 'angry']`

`iconSize`: String icon pixel size. Defaults to `38px`

`onSelect`: Function callback when emoji is selected

---

### Pokemon
```
import React from 'react';
import { PokemonSelector } from 'react-reactions';

const Component = () => {
  return (
    <PokemonSelector />
  )
}
```
**Props:**

`reactions`: Array of strings for reactions to display. Defaults to `['like', 'love', 'haha', 'wow', 'sad', 'angry']`

`iconSize`: String icon pixel size. Defaults to `38px`

`onSelect`: Function callback when emoji is selected

---

## Counters

### Github
```
import React from 'react';
import { GithubCounter } from 'react-reactions';

const Component = () => {
  return (
    <GithubCounter />
  )
}
```
**Props:**

`counters`: Array of counter objects structured such that:

```
{
  emoji: '👍', // String emoji reaction
  by: 'case', // String of persons name
}
```

`user`: String name of user so that user displays as `You`

`onSelect`: Function callback when emoji is selected

`onAdd`: Function callback when add reaction is clicked

---

### Youtube
```
import React from 'react';
import { YoutubeCounter } from 'react-reactions';

const Component = () => {
  return (
    <YoutubeCounter />
  )
}
```
**Props:**

`like`: String number of likes

`dislike`: String number of dislikes

`onLikeClick`: Function callback when like is clicked

`onDislikeClick`: Function callback when dislike is clicked

---

### Facebook
```
import React from 'react';
import { FacebookCounter } from 'react-reactions';

const Component = () => {
  return (
    <FacebookCounter />
  )
}
```
**Props:**

`counters`: Array of counter objects structured such that:

```
{
  emoji: 'like', // String name of reaction
  by: 'Case Sandberg', // String of persons name
}
```

`user`: String name of user so that user displays as `You`

`important`: Array of strings for important users to display their name

`bg`: String of hex color for outline of overlapping reactions. Defaults to `#fff`

`onClick`: Function callback when clicked

---

### Slack
```
import React from 'react';
import { SlackCounter } from 'react-reactions';

const Component = () => {
  return (
    <SlackCounter />
  )
}
```
**Props:**

`counters`: Array of counter objects structured such that:

```
{
  emoji: '🗿', // String emoji reaction
  by: 'case', // String of persons name
}
```

`user`: String name of user so that user displays as `You`

`onSelect`: Function callback when emoji is selected

`onAdd`: Function callback when add reaction is clicked

---

> 100% inline styles via [ReactCSS](http://reactcss.com/)
