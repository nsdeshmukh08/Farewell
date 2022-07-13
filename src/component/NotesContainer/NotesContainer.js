import React, { useState } from 'react'
import {useEffect} from 'react'
import getNotes from './get';
import HTMLFlipBook from 'react-pageflip';

import './NotesContainer.css'

function getDate (time){
  return time.substring(0,10);
}

export default function NotesContainer({refreshNotes = true, setRefreshNotes = () => {}}) {


  const [notes, setNotes] = useState([])

  useEffect(() => {
    setRefreshNotes(false);
    getNotes().then(res => {
      setNotes(res);
    })
  },[refreshNotes, setRefreshNotes]);

  const pages = notes.map((note, index) => {
    return (
      <div className="notebookPage">
        <h1>{note.name}</h1>
        <p>{note.projectName}</p>
        <p>{note.note}</p>
        <p>{getDate(note.time)}</p>
      </div>
    )
  })

  return (
    <div className='notes-container'>
      <HTMLFlipBook width={300} height={500} maxShadowOpacity={0.5} className="notebook">
        {pages}
      </HTMLFlipBook>
    </div>
  )
}
