import React from 'react'
import imgCreate from '../assets/create-section.png'
import FeatureSection from './FeatureSection';
import { TbPlayerTrackNext } from 'react-icons/tb';
import { RxUpdate } from 'react-icons/rx';
import { FaLaptopCode } from 'react-icons/fa';


const CreateSection = () => {

    const createFeatures = [
        {
            icon: <TbPlayerTrackNext />,
            subtitle: 'Fast',
            description: 'question formats. Consistently come up with new ideas and inspiration, while saving time and effort.',
        },
        {
            icon: <RxUpdate />,
            subtitle: 'Flexible',
            description: 'question formats. Consistently come up with new ideas and inspiration, while saving time and effort.',
        },
        {
            icon: <FaLaptopCode />,
            subtitle: 'Integrated',
            description: 'question formats. Consistently come up with new ideas and inspiration, while saving time and effort.',
        },
      ];

  return (
    <FeatureSection 
        img={imgCreate}    
        subtitle='Crea' 
        title='Sube tu informacion fácil' 
        text='Te presentamos la nueva forma de estudiar con resumenes generados por la IA, 
                cuestionarios ludicos y asistentes virtuales.'
        features={createFeatures} 
        imgPosition='left'
    />
  )
}

export default CreateSection