import './App.css'
import AboutSection from './components/AboutSection'
import CategoriesSection from './components/CategorySection'
import ContactLocationSection from './components/ContactLocationSection'
import Footer from './components/Footer'
import GallerySection from './components/GallerySection'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import WhatsAppButton from './components/WhatsappButton'

function App() {
  
  return (
    <>
    <Hero/>
    <CategoriesSection/>
    <MenuSection/>
    <GallerySection/>
    <AboutSection/>
    <ContactLocationSection/>
    <Footer/>
    
    <WhatsAppButton/>
    </>
  )
}

export default App
