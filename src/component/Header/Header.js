import React, {useState} from 'react'
import { Button } from 'antd';

import './Header.css'
import NoteModel from '../NoteModel/NoteModel';

export default function Header({setRefreshNotes = () => {}}) {

  const [visible, setVisible] = useState(false);

  return (
    <div className='header'>
      <h1>
        Farewell Card For Atreyee. Let's create a nice memory for her!
      </h1>

      <Button
        type="primary"
        className='header-add-msg-btn'
        onClick= {() => setVisible(true)}>
          Please add your note +
      </Button>

      <NoteModel visible={visible} setVisible={setVisible} setRefreshNotes={setRefreshNotes}/>
    </div>
  )
}
