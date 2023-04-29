import React from 'react'
import { useDrag } from 'react-dnd'
import "../../styles/WarmupScreen.css"
import { SuspectCard } from '../SuspectCard'

export function DraggableSuspect({ id }: { id: string }): JSX.Element {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'image',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  })
  return (
    <div className="suspect_bank_item">
        <div ref={dragRef}>
            <SuspectCard id={id}></SuspectCard>
            {isDragging}
        </div>
        <p>Suspect {id}</p>
    </div>
  )
}
