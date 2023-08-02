import React from 'react'
import imgHero from '../assets/hero-img.png'

const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className='hero-info'>
            <h1 className='hero-title'>Ya no abandones los estudios por falta de tutor</h1>
            <p className='hero-subtitle'>Servicio de tutoria académica personalizada</p>
            <p>Convierte con facilidad cualquier video, documento o URL en un curso interactivo con asistente inteligente. 
                Perfecto para empresas, profesionales y estudiantes.</p>
            <p className='hero-footer'>Potenciado por Inteligencia Artificial</p>
            <div className='hero-links-container'>
                <a className='btn-create' href='#'>Crea un tutor gratis</a>
                <a className='hero-link' href='#'>Saber más →</a>
            </div>
        </div>
        <div className='hero-img'>
            <img src={imgHero} alt="Imagen de una laptop donde se puede apreciar una ventana de YachAI" />
        </div>
    </section>
  )
}

export default HeroSection