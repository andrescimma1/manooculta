import React from 'react'
import BackCard from '../BackCard/BackCard'
import "./EnemyHand.css";


function EnemyHand() {
  return (
    <div className='enemyHand'>
    <BackCard _number={1}/>
    <BackCard _number={2}/>
    <BackCard _number={3}/>
    <BackCard _number={4}/>
    <BackCard _number={5}/>
    </div>
  )
}

export default EnemyHand
