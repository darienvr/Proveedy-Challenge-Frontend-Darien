import React from 'react'
import BtnQuiz from './ButtonQuiz'
import Feature from './Feature'

const FeatureSection = ({img, title, subtitle, text, features, imgPosition}) => {
  return (
    <div className='feature-section'>
        {imgPosition === 'left' && (
            <div className='img-feature-container'>
                <img src={img} className='img-feature' alt='Imagen relacionada a la caracteristica mencionada en la seccion' />
            </div>
        )}
        <div className='feature-body'>
            <div className='feature-header'>
                <p>{subtitle}</p>
                <h1>{title}</h1>
            </div>
            <p>{text}</p>
            {features.map((item, index)=>(
                <Feature key={index} {...item} />
            ))}
            <BtnQuiz />
        </div>
        {imgPosition === 'right' && (
            <div className='img-feature-container'>
                <img src={img} className='img-feature' alt='Imagen relacionada a la caracteristica mencionada en la seccion' />
            </div>
        )}
    </div>
  )
}

export default FeatureSection