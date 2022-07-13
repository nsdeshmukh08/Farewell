import React, { useState } from 'react'
import {useEffect} from 'react'
import { Card } from 'antd';
import getNotes from './get';

import './NotesContainer.css'

function getDate (time){
  return time.substring(0,10);
}

export default function NotesContainer({refreshNotes = true, setRefreshNotes = () => {}}) {

  const CardHeader = ({note}) => (<>
    <div className='card-header'>
      <div>
        <strong>Name: </strong>{note.name}<br></br>
        <strong>Team:</strong> {note.projectName}
      </div>

      <div className='date'><strong>Date: </strong>{getDate(note.time)}</div>
    </div>
  </>)

  const [notes, setNotes] = useState([])

  useEffect(() => {
    setRefreshNotes(false);
    getNotes().then(res => {
      setNotes(res);
    })
  },[refreshNotes, setRefreshNotes]);

  const cards = notes.map((note, index) => {
    return (
      <Card hoverable title={<CardHeader note = {note}/>} className='note' bordered={false}>
        <p>{note.note}</p>
      </Card>

    )
  })
  return (
    <div className='notes-container'>
      {cards}
    </div>
  )
}
