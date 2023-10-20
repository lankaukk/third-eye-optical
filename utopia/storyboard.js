import * as React from 'react'
import { Scene, Storyboard, RemixScene } from 'utopia-api'
import { App } from '/src/app.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'
import { MoodBoard } from '/src/mood-board.js'
import { Candle } from '/src/candle.js'

export var storyboard = (
  <Storyboard>
    <RemixScene
      className='my-class'
      style={{
        position: 'absolute',
        width: 834,
        height: 1328,
        left: 8,
        top: -24,
        overflow: 'hidden',
      }}
      data-label='App'
    />
    <Scene
      style={{
        position: 'absolute',
        left: -3984,
        width: 3872,
        height: 3624,
        top: -24,
      }}
      data-label='Mood Board'
    >
      <MoodBoard />
      <img
        alt=''
        src='./assets/clipboard/image_6.png'
        style={{
          position: 'absolute',
          left: 440,
          top: 2208,
          width: 1920,
          height: 1080,
        }}
        data-aspect-ratio-locked
      />
      <img
        alt=''
        src='./assets/clipboard/image_9.png'
        style={{
          position: 'absolute',
          left: 1604,
          top: 1056,
          width: 458,
          height: 458,
        }}
        data-aspect-ratio-locked
      />
      <img
        alt=''
        src='./assets/clipboard/image_11.png'
        style={{
          position: 'absolute',
          left: 601,
          top: 1726,
          width: 735,
          height: 389,
        }}
        data-aspect-ratio-locked
      />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -4769,
        top: -43,
        width: 589,
        height: 510,
      }}
      data-label='Candle'
    >
      <Candle />
    </Scene>
  </Storyboard>
)
