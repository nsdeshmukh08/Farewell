import React, { useState } from 'react'
import {useEffect} from 'react'
import { Card } from 'antd';
import axios from 'axios';

import './NotesContainer.css'

export default function NotesContainer({refreshNotes = true, setRefreshNotes = () => {}}) {
  const CardHeader = ({note}) => {
    return (<>
      <div className='card-header'>
        <div>
          <strong>Name: </strong>{note.name}<br></br>
          <strong>Team:</strong> {note.projectName}
        </div>
        <div><strong>Date: </strong>{note.time}</div>
      </div>
    </>)
  }

  const [notes, setNotes] = useState([])

  useEffect(() => {
    setRefreshNotes(false);
    axios.get('https://nutanix-farewell.herokuapp.com/api/getNotes')
    .then(res => {
      setNotes(res.data.data)
    })
    .catch(error => {;
      console.error(error);
    });
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
