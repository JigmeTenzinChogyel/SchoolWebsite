import './App.css'
import Directions from './components/Directions'
import Features from './components/Features'
import Hero from './components/Hero'
import Message from './components/Message'
import Navbar from './components/Navbar'
import Quote from './components/Quote'
import Story from './components/Story'
import Teachers from './components/Teachers'
import Stats from './components/stats'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Message />
      <Story />
      <Features />
      <Quote />
      <Directions />
      <Stats />
      <Teachers />
    </div>
  )
}

export default App
