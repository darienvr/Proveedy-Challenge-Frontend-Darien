import React from 'react'

const Feature = ({icon, subtitle, description}) => {
  return (
    <div className='feature-item'>
        <div className='feature-item-icon'>{icon}</div>
        <div>
            <h3>{subtitle}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Feature