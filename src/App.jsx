import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Book from './pages/Book'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Sitemap from './pages/Sitemap'

function PageTransition({ children }) {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-fade bg-brand-black min-h-screen">
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book" element={<Book />} />
            <Route path="/book-online" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-dark text-center px-6 pt-20">
      <div>
        <span className="section-label">404</span>
        <h1 className="font-heading text-6xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary">Go Home</a>
      </div>
    </section>
  )
}

export default App
