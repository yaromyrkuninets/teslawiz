import Header from "./components/header/Header.jsx";
import {About} from './components/about/About.jsx';
import Main from "./components/main/Main";
import Services from "./components/services/Services.jsx";
import Experts from "./components/experts/Experts.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <About/>
      <Services/>
      <Experts/>
      <Testimonials/>
      <Contact/>
    </>
  );
}

export default App;
