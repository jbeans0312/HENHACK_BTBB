import React from 'react'
import { useDrag } from 'react-dnd'
import "../styles/WarmupScreen"

export function DraggableSuspect({ id }: { id: string }): JSX.Element {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'image',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  })
  return (
    <img className='susImage' ref={dragRef} src={require('../suspect_images/suspect_' + id + '.png')}>
        {isDragging}
    </img>
  )
}
