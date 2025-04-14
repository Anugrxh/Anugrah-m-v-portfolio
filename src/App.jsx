import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import LogoSection from "./sections/LogoSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Navbar from "./components/Navbar.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import TechStack from "./sections/TechStack.jsx"


const App = () => {
  return (
    <main>
       <>
        <Navbar/>
        <Hero />
        <ShowcaseSection/>
        <LogoSection/>
        <FeatureCards/>
        <ExperienceSection/>
        <TechStack/>
       
       </>
      
    </main>
  )
}

export default App
