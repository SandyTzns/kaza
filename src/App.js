import { Routes, Route, HashRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Apartment } from './pages/Apartment'
import { NotFound } from './pages/NotFound'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

function App() {
  return (
    <HashRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/kaza" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/logement/:logementId" element={<Apartment />}></Route>
          <Route path="/" element={<Navigate to="/kaza" />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
      <Footer />
    </HashRouter>
  )
}

export default App
