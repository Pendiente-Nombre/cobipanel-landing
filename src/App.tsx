import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import MissionVision from './components/MissionVision'
import Quality from './components/Quality'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-archivo">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <MissionVision />
        <Quality />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
