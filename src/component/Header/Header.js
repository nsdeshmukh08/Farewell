import React, {useState} from 'react'
import { Button } from 'antd';

import './Header.css'
import NoteModel from '../NoteModel/NoteModel';

export default function Header({setRefreshNotes = () => {}}) {

  const [visible, setVisible] = useState(false);

  return (
    <div className='header'>
      <h1>
        Farewell Card For Atreyee. <span className='sub-header'>Let's create a nice memory for her!</span>
      </h1>
      
      <Button
        type="primary"
        className='header-add-msg-btn btn-3'
        onClick= {() => setVisible(true)}>
          <span>&nbsp;&nbsp;Please add your note +&nbsp;&nbsp;</span>
        </Button>

      <NoteModel visible={visible} setVisible={setVisible} setRefreshNotes={setRefreshNotes}/>
    </div>
  )
}
