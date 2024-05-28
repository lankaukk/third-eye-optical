import * as React from 'react'
import { Scene, Storyboard, RemixScene } from 'utopia-api'
import { App } from '/src/app.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'
import { MoodBoard } from '/src/mood-board.js'
import { Candle } from '/src/candle.js'
import { Illusions } from '/src/illusions.js'

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
        left: -3996,
        width: 3872,
        height: 3624,
        top: -24,
      }}
      data-label='The Vision'
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
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#401E7A',
          width: 354,
          height: 383,
          left: 3254,
          top: 1170,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: 103,
          borderRadius: 178,
          overflow: 'hidden',
        }}
      >
        <Candle />
      </div>
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -4946,
        top: -896,
        width: 1411,
        height: 510,
      }}
      data-label='Candles'
    >
      <div
        style={{
          backgroundColor: '#25426E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: 33.333333333333336,
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: 38,
        }}
      >
        <Candle
          style={{ width: 160, height: 305 }}
          height={200}
        />
        <Candle
          style={{ width: 160, height: 205 }}
          height={100}
        />
        <Candle
          style={{ width: 160, height: 205 }}
          height={33}
        />
        <Candle
          style={{ width: 160, height: 295 }}
          height={190}
        />
        <Candle
          style={{ width: 160, height: 325 }}
          height={220}
        />
        <Candle
          style={{ width: 160, height: 325 }}
          height={70}
        />
        <Candle
          style={{ width: 160, height: 325 }}
          height={142}
        />
      </div>
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -6080,
        top: -27,
        width: 1248,
        height: 728,
      }}
      data-label='Illusion'
    >
      <Illusions style={{ height: 18 }} />
    </Scene>
  </Storyboard>
)
