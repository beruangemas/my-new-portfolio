import { useState } from 'react'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import CustomCursor from './components/CustomCursor.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
// import Skills from './pages/Skills.tsx'
import Experience from './pages/Experience.tsx'
import Contact from './pages/Contact.tsx'
import Projects from './pages/Projects.tsx';
import { AnimatePresence } from 'motion/react'
import type {Page} from './types'


function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home key="home" onStart={setCurrentPage} onPlayMusic={() => setIsMusicPlaying(true)} />
      case 'about':
        return <About key="about" />
      case 'contact':
        return <Contact key="contact" />
      // case 'skills':
      //   return <Skills key="skills" />
      case 'experience':
        return <Experience key="experience" />
      case 'projects':
        return <Projects key="projects" />

      default:
        return <Home key="home" onStart={setCurrentPage} onPlayMusic={() => setIsMusicPlaying(true)}/>
    }
  }
  return (
    <div className ="min-h-screen flex flex-col relative selection:bg-surface-tint selection:text-on-primary">
    <CustomCursor/>
    <Navbar currentPage= {currentPage} setCurrentPage={setCurrentPage} />

    <main className="flex-1 relative z-10 w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </main>
    <Footer isPlaying={isMusicPlaying} setIsPlaying={setIsMusicPlaying} />
    </div>
  )
}

export default App
