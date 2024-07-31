import About from "./components/About/";
import Contact from "./components/Contact/";
import Footer from "./components/Footer";
import Header from "./components/Header/";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills/";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
     <Navbar />
     <Header />
     {/*<About />*/}
     <Services />
     <Skills />
     <Projects />
     <Testimonial />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
