import React from 'react'
import atImg  from '../../images/Atreyee.jpg';

import './Side.css';

export default function Side() {
  return (
    <div className='side'> 
      <img className= 'user-img' src={atImg} />

      <h2>Atreyee, this is what your colleagues have to say about you...</h2>
    </div>
  )
}
