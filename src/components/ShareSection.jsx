import React from 'react'
import shareImg from '../assets/share-img.png'
import FeatureSection from './FeatureSection';
import { BsFillShareFill } from 'react-icons/bs';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { ImEmbed } from 'react-icons/im';

const ShareSection = () => {

    const shareFeatures = [
        {
          icon: <BsFillShareFill />,
          subtitle: 'Share',
          description: 'Share quizzes effortlessly with students or colleagues.',
        },
        {
          icon: <AiOutlineCloudDownload />,
          subtitle: 'Export',
          description: 'Download as text, csv and Aiken format for seamless integration into your learning management system or classroom setting.',
        },
        {
          icon: <ImEmbed />,
          subtitle: 'Embed',
          description: 'Add quizzes in your own website, LMS or blog. Perfect for lead generation, engaging your users.',
        },
      ];

  return (
    <FeatureSection 
        img={shareImg} 
        subtitle='Share & Embed' 
        title='Publish with ease' 
        text='Effortlessly share and embed quizzes with your team, students, or use them as study aids - 
              get everyone engaged and enhance learning experiencies in just seconds.'
        features={shareFeatures}
        imgPosition='right'    
    />
  )
}

export default ShareSection