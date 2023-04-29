import React from 'react'
import '../../styles/WarmupScreen.css'
import { DraggableSuspect } from './DraggableSuspect'

export function WarmupScreen(): JSX.Element {
  return (
        <div className='container'>
            <h1>
              Suspects
            </h1>
            <div className='suspectBank'>
              <DraggableSuspect id='a'></DraggableSuspect>
              <DraggableSuspect id='b'></DraggableSuspect>
              <DraggableSuspect id='c'></DraggableSuspect>
              <DraggableSuspect id='d'></DraggableSuspect>
            </div>
        </div>
  );
}
