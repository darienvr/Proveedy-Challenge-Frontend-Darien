import React from 'react'

const Service = ({icon, title, description}) => {

  return (
    <div className='service'>
        <div className='service-header'>
            <div className='service-icon'>
              {icon}
            </div>
            <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <a href='#'>Empieza aquí →</a>
    </div>
  )
}

export default Service