import * as React from 'react'

export var Candle = (props) => {
  return (
    <div
      style={{
        ...props.style,
        width: '100%',
        height: '100%',
        backgroundColor: '#25426E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
      }}
    >
      <div
        data-label='flame'
        className='flame'
        style={{
          width: 30,
          height: 50,
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
          borderRadius: '100px',
          backgroundImage:
            'radial-gradient(#FFE70D 24%, #FFE56400 100%)',
        }}
      />
      <div
        data-label='candle'
        style={{
          width: 40,
          height: 150,
          left: 0,
          backgroundImage:
            'linear-gradient(90deg, #E0DECD 0%, #FFFFFF 58%)',
        }}
      >
        <div
          className='wax1'
          style={{
            width: 50,
            height: 12,
            position: 'relative',
            top: 0,
            left: -5,
            borderRadius: 10,
            zIndex: 5,
            backgroundImage:
              'linear-gradient(90deg, #E0DECD 0%, #FFFFFF 100%)',
          }}
        />
        <div
          className='wax2'
          style={{
            width: 15,
            height: 77,
            position: 'relative',
            top: -12,
            left: -5,
            borderRadius: 10,
            backgroundImage:
              'linear-gradient(90deg, #E0DECD 0%, #FFFFFF 100%)',
          }}
        />
      </div>
      <div
        data-label='plate'
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'max-content',
          height: 'max-content',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          data-label='plate-top'
          style={{
            height: 15,
            width: 74,
            backgroundColor: 'gold',
            borderRadius: 10,
            backgroundImage:
              'url(./assets/clipboard/image_11.png)',
            backgroundSize: '220%',
            backgroundPosition: '0% 12%',
            borderRadius: '5 5 100px 100px',
            borderRadius: 10,
          }}
        />
        <div
          data-label='plate-top'
          style={{
            height: 15,
            width: 74,
            backgroundColor: 'gold',
            backgroundImage:
              'url(./assets/clipboard/image_11.png)',
            backgroundSize: '220%',
            backgroundPosition: '0% 12%',
            borderRadius: '5 5 100px 100px',
            borderRadius: 10,
          }}
        />
        <div
          data-label='plate-bottom'
          style={{
            height: 25,
            width: 160,
            backgroundImage:
              'url(./assets/clipboard/image_11.png)',
            backgroundSize: '220%',
            backgroundPosition: '0% 12%',
            borderRadius: '5px 5px 100px 100px',
          }}
        />
      </div>
    </div>
  )
}
