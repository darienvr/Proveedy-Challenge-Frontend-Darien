import React from 'react'
import ServicesList from './ServicesList'
import { GoChecklist } from 'react-icons/go';
import { RiSlideshowLine } from 'react-icons/ri';
import { PiRobot } from 'react-icons/pi';

const ServicesSection = () => {

  const servicesItem = [
    {
        icon: <GoChecklist />,
        title: 'Sube tu información',
        description: 'Educativa, procesa PDF, MP4, MP3. Crear tu libreria de documentos que alimentaran a tu tutor inteligente.',
    },
    {
        icon: <RiSlideshowLine />,
        title: 'Generación de Ficha',
        description: 'Resumen con palabras claves, puntos claves, resumen y capítulos recomendados para un fácil aprendizaje.',
    },
    {
        icon: <PiRobot />,
        title: 'Tutor Virtual',
        description: 'Crea cuestionarios para facilitar el aprendizaje y responde en base al contenido académico generado.',
    },
  ];

  return (
    <section className='services-section'>
        <h2>Usa inteligencia artificial para mejorar tu aprendizaje.</h2>
        <div className='container-services-list'>
            <ServicesList service={servicesItem}/>
        </div>
    </section>
  )
}

export default ServicesSection