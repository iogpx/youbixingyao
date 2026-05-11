import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Cases from './components/Cases'
import Process from './components/Process'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleFormSuccess = () => {
    setShowThankYou(true)
    setTimeout(() => setShowThankYou(false), 5000)
  }

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Cases />
      <Process />
      <ContactForm onSuccess={handleFormSuccess} />
      <FAQ />
      <Footer />
      {showThankYou && (
        <div className="thank-you-modal">
          <div className="thank-you-content">
            <h2>感谢您的信息！</h2>
            <p>我们已收到您的留言，会尽快与您联系。</p>
            <p>或者扫描下方二维码主动加我们，让我们为您答疑解惑。</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
