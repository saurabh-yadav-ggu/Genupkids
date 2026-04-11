import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ActivityCards from './components/ActivityCards'

/**
 * App Component
 * Main home page showing category selection
 * Routes to different game categories using React Router
 */
function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface font-body relative pb-24 overflow-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Background ambient glow shapes to match design */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-tertiary-container/30 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-primary-container/20 blur-[80px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-4">
        <Header />
        <main className="mt-16">
          <Hero />
          <ActivityCards 
            onSelectNumerical={() => navigate('/games/numerical')} 
            onSelectAlphabetical={() => navigate('/games/alphabetical')} 
            onSelectThinking={() => navigate('/games/thinking')} 
            onSelectMatching={() => navigate('/games/matching')} 
          />
        </main>
      </div>
    </div>
  )
}

export default App
