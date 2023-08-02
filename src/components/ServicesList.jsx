import React from 'react'
import Service from './Service'

const ServicesList = ({service}) => {

  return (
    <>
        {service.map((item, index)=>{
            return(
                <Service key={index} {...item} />
            )
        })}
    </>
  )
}

export default ServicesList