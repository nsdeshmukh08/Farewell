import React, { useState } from 'react'
import {useEffect} from 'react'
import getNotes from './get';
import HTMLFlipBook from 'react-pageflip';

import './NotesContainer.css'

function getDate (time){
  return time.substring(0,10);
}

export default function NotesContainer({refreshNotes = true, setRefreshNotes = () => {}}) {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRefreshNotes(false);
    getNotes().then(res => {
      setLoading(false);
      setNotes(res);
    })
  },[refreshNotes, setRefreshNotes]);

  const pages = notes.map((note, index) => {
    return (
      <div className="notebookPage">
        <h3 className='nameColour'>{note.name}</h3>
        <h4 className='projectColour'>{note.projectName} -  {getDate(note.time)}</h4>
        <p className='noteColour'>{note.note}</p>
      </div>
    )
  })

  if(loading) {
    return (
      <div className='notes-container'>
        <h2>Loading your card....</h2>
      </div>
    )
  }

  return (
    <div className='notes-container'>
      <HTMLFlipBook width={350} height={550} maxShadowOpacity={0.5} className="notebook">
        {pages}
      </HTMLFlipBook>
    </div>
  )
}
