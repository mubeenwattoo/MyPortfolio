import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header, { Headerphone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonial from "./components/Testimonials";
import Timeline from "./components/Timeline";
import Work from "./components/Work";

function App() {
 
const [menuOpen, setMenuOpen] = useState(false);
console.log(menuOpen);

  return(
    <>
    <Headerphone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home />
    <Work />
    <Timeline />
    <Services />
    <Testimonial />
    <Contact />
    <Toaster />
    <Footer />
    </>
  
  );
  
}

export default App;
