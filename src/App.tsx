import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Companies from './components/Companies';
import Collaboration from './components/Collaboration';
import WebContainers from './components/WebContainers';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1B1E]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Companies />
        <Collaboration />
        <WebContainers />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;