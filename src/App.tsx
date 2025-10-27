import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CaseStudies from './components/CaseStudies/CaseStudies';
import ValueProposition from './components/ValueProposition/ValueProposition';
import Services from './components/Services/Services';
import WorkWithUs from './components/WorkWithUs/WorkWithUs';
import FounderSection from './components/FounderSection/FounderSection';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CaseStudies />
      <ValueProposition />
      <Services />
      <WorkWithUs />
      <FounderSection />
      <Footer />
    </div>
  );
}

export default App;