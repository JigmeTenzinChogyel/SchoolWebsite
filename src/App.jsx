import './App.css'
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
    </div>
  )
}

export default App
