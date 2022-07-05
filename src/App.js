// import { BrowserRouter as Router , Route , Routes } from "react-router-dom"


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Updates from './components/Updates'
import Footer from './components/Footer'

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      {/* <Router> */}
          {/* <Routes> */}
            {/* <Route path='/note/:id' /> */}
            {/* <Redirect to='/' /> */}
          {/* </Routes> */}
        {/* </Router> */}
      <Updates />
      <Footer />
    </div>
  );
}

export default App;