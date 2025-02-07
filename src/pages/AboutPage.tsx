import AboutSection from '../containers/about-page/about-section'
import GallerySection from '../containers/about-page/gallery-section'
import HeroSection from '../containers/about-page/hero-section'
import TechnologiesSection from '../containers/about-page/technologies-section'

const AboutPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TechnologiesSection />
    </>
  )
}

export default AboutPage
