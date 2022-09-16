import './App.css'
import Main from './components/Main'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <main>
        <Routes>
          {<Route index element={<Main />} />}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
