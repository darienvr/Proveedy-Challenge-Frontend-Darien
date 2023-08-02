import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import CreateSection from './components/CreateSection'
import ShareSection from './components/ShareSection'
import AnalyzeSection from './components/AnalyzeSection'

function App() {

  return (
      <>
        <Navbar />
        <section className='container'>
          <HeroSection />
          <ServicesSection />
          <CreateSection />
          <ShareSection />
          <AnalyzeSection />
        </section>
      </>
  )
}

export default App
