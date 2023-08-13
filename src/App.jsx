import './App.css'
import Features from './components/Features'
import Hero from './components/Hero'
import Message from './components/Message'
import Navbar from './components/Navbar'
import Story from './components/Story'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Message />
      <Story />
      <Features />
    </div>
  )
}

export default App
