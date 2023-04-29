import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableSuspect } from './DraggableSuspect';

export function DepositBank(): JSX.Element {
  const [bank, setBank] = useState(Array<string>())
  const [{ isOver }, dropRef] = useDrop({
    accept: 'image',
    drop: (item: { id: string }) => { setBank((bank) => !bank.includes(item.id) ? [...bank, item.id] : bank); },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })
  console.log(bank)
  return (
    <div ref={dropRef} className='deposit_bank'>
        {bank.map((id: string) => (
            <div key={id}>
                <DraggableSuspect id={id}></DraggableSuspect>
            </div>
        ))}
        {isOver}
    </div>
  )
}
