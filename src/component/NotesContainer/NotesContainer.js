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
      
      <div className='date'><strong>Date: </strong>10-07-2022</div>
    </div>
  </>)

  return (
    <div className='notes-container'>

      <Card hoverable title={<CardHeader/>} className='note' bordered={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem natus architecto assumenda? Officia perferendis debitis blanditiis eligendi maiores voluptates facilis atque libero dolores, amet aperiam veniam pariatur consectetur eum hic laudantium quo vero tempore at ea quas! Necessitatibus alias eum tenetur iste sint provident non culpa aut praesentium exercitationem?

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
