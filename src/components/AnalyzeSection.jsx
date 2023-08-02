import React from 'react'
import FeatureSection from './FeatureSection';
import analyzeImg from '../assets/analyze-img.png'
import { AiOutlineCheckSquare } from 'react-icons/ai';

const AnalyzeSection = () => {

    const analyzeFeatures = [
        {
          icon: <AiOutlineCheckSquare />,
          subtitle: 'Auto Grading',
          description: 'Intelligently evaluates and grades short answer questions, going the extra mile by offering valuable suggestions on how to improve and attain higher scores. ',
        },
      ];

  return (
    <FeatureSection 
        img={analyzeImg} 
        subtitle='Analyze' 
        title='Measure performance' 
        text='Reports and stats to understand how individuals and groups performed. 
              Auto-graded quizzes make marking a thing of the past.' 
        features={analyzeFeatures}
        imgPosition='left'      
    />
  )
}

export default AnalyzeSection