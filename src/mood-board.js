import * as React from 'react'
import { Title } from '/src/title.js'

export var MoodBoard = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout',
        backgroundImage:
          'linear-gradient(0deg, rgb(214, 210, 255, 1) 0%, #e4e1ff 50%, #E1FFF8 85%)',
      }}
    >
      <img
        alt=''
        src='./assets/clipboard/image.png'
        style={{
          position: 'absolute',
          left: 1016,
          top: 1266,
          width: 462,
          height: 462,
        }}
        data-aspect-ratio-locked
      />
      <img
        alt=''
        src='./assets/clipboard/image_3.png'
        style={{
          position: 'absolute',
          left: 228,
          top: 1214,
          width: 640,
          height: 640,
        }}
        data-aspect-ratio-locked
      />
      <img
        data-aspect-ratio-locked
        src='./assets/third_eye.png'
        style={{
          position: 'absolute',
          width: 488,
          height: 488,
          top: 408,
          left: 380,
        }}
      />
      <img
        alt=''
        src='./assets/clipboard/image_4.png'
        style={{
          position: 'absolute',
          left: 948,
          top: 796,
          width: 600,
          height: 360,
        }}
        data-aspect-ratio-locked
      />
      <Title
        style={{
          position: 'absolute',
          left: 810,
          top: 342,
          color: '#25426e',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 530,
          left: 2377,
          width: 'max-content',
          height: 'max-content',
          display: 'flex',
          flexDirection: 'row',
          padding: 62,
          backgroundColor: '/*#903c10*/',
          border: '13px double #903C10',
          borderRadius: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          data-aspect-ratio-locked
          src='./assets/image 3.png'
          style={{ width: 376, height: 376 }}
        />
        <img
          data-aspect-ratio-locked
          src='./assets/image 1.png'
          style={{ width: 380, height: 376 }}
        />
        <img
          data-aspect-ratio-locked
          src='./assets/image 2.png'
          style={{ width: 376, height: 376 }}
        />
      </div>
      <img
        data-aspect-ratio-locked
        src='./assets/image 5.png'
        style={{
          position: 'absolute',
          width: 387,
          height: 387,
          top: 1625,
          left: 1935,
        }}
      />
      <img
        alt=''
        src='./assets/clipboard/image_5.png'
        style={{
          position: 'absolute',
          left: 2496,
          top: 1260,
          width: 1000,
          height: 1500,
        }}
        data-aspect-ratio-locked
      />
      <img
        alt=''
        src='./assets/clipboard/image_8.png'
        style={{
          position: 'absolute',
          left: -2423,
          top: 1413,
          width: 750,
          height: 750,
        }}
        data-aspect-ratio-locked
      />
      {
        // @utopia/conditional=true
        true ? (
          <div
            style={{
              backgroundColor: '#aaaaaa33',
              position: 'absolute',
              left: 2719,
              top: 2982,
              width: 600,
              height: 456,
            }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              left: 2719,
              top: 2982,
              width: 600,
              height: 456,
            }}
          >
            False branch
          </div>
        )
      }
    </div>
  )
}
