import React from 'react'
import { Card } from 'antd';

import './NotesContainer.css'
export default function NotesContainer() {

  const CardHeader = () => (<>
    <div className='card-header'>
      <div>
        <strong>Name: </strong> Narayan Deshmukh<br></br>
        <strong>Team:</strong> Aiops-ui
      </div>
      
      <div><strong>Date: </strong>10-07-2022</div>
    </div>
  </>)

  return (
    <div className='notes-container'>

      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
       Thank you
      </Card>

      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>


      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>


      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>


      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

    </div>
  )
}
