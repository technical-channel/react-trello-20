import React from 'react'
import DiscoverSection from './Home/components/DiscoverSection'
import FactiblitySection from './Home/components/FactibilitySection'
import FeaturedSection from './Home/components/FeatureSection'
import HeroSection from './Home/components/HeroSection'

const HomePage = () => {
  return (
    <div>
  
        <HeroSection/>
        <FeaturedSection/>
        <DiscoverSection/>
        <FactiblitySection/>
        
        </div>
  )
}

export default HomePage