import * as React from 'react'

export var Illusions = (props) => {
  function RenderLines({ numberOfLines }) {
    const lines = Array.from(
      { length: numberOfLines },
      (_, index) => (
        <div
          key={index}
          style={{
            background: 'white',
            height: 2,
            width: 500,
            transform: 'rotate(45deg)',

            flexShrink: 0,
          }}
        ></div>
      ),
    )

    return <>{lines}</>
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#5a3150',
        contain: 'layout',
      }}
    >
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: 320,
          height: 497,
          gap: 15,
          top: 290,
          left: 96,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RenderLines numberOfLines={50} />
      </div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: 320,
          height: 497,
          gap: 15,
          top: 290,
          left: 736,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RenderLines numberOfLines={50} />
      </div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: 320,
          height: 497,
          gap: 15,
          top: 290,
          left: 416,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'scale(-1, 1)',
        }}
      >
        <RenderLines numberOfLines={50} />
      </div>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: 320,
          height: 497,
          gap: 15,
          top: 290,
          left: 1056,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'scale(-1, 1)',
        }}
      >
        <RenderLines numberOfLines={50} />
      </div>
      <div
        style={{ position: 'absolute' }}
        className='magic'
      >
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: 320,
            height: 497,
            gap: 15,
            left: 96,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'scale(-1, 1)',
          }}
        >
          <RenderLines numberOfLines={50} />
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: 320,
            height: 497,
            gap: 15,
            left: 416,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RenderLines numberOfLines={50} />
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: 320,
            height: 497,
            gap: 15,
            left: 736,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'scale(-1, 1)',
          }}
        >
          <RenderLines numberOfLines={50} />
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: 320,
            height: 497,
            gap: 15,
            left: 1056,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RenderLines numberOfLines={50} />
        </div>
      </div>
    </div>
  )
}
