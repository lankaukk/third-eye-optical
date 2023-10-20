import * as React from 'react'

export var Title = (props) => {
  return (
    <span
      style={{
        position: 'absolute',
        wordBreak: 'break-word',
        left: 962,
        top: 125,
        fontSize: '116px',
        fontFamily: 'Rosie Brown Serif Demo',
        fontStyle: 'normal',
        fontWeight: 400,
        height: 'max-content',
        width: 'max-content',
        ...props.style,
      }}
    >
      Third Eye Optical
    </span>
  )
}
