import React from 'react'
import "./BackCard.css";

function BackCard({ _number }: { _number: any }) {
  return (
    <div className="backCard">
     <div>{_number}</div>
    </div>
  )
}

export default BackCard
