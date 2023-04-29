import React from 'react'
import '../styles/SuspectCard.css'

export function SuspectCard ({ id }: { id: string }): JSX.Element {
  const suspectName = 'suspect_' + id + '.png'
  console.log(suspectName)

  return (
        <div className="susCardContainer">
            <img className="susImage" src={require('../suspect_images/' + suspectName)}></img>
        </div>
  )
}
