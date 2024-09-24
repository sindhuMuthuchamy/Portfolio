import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer'

const App = ()=> {
  return (
    <>
       <Navbar />
       <div className='container'>
       <Hero/>
       
       <Skills/>
       <Projects/>
       <ContactMe/>
       <Footer/>
       </div>
    </>
  );
}

export default App;
