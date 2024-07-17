import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Hero from './Components/Navbar/Hero/Hero';
import Staff from './Components/Staff/Staff';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import SolarPawer from './Components/SolarPower/SolarPawer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import { useState } from 'react';
import LanguageToggle from './Components/Language/LanguageToggle';

function App() {
  const [playState, setPlayState] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Hero />
      < div className='container'>

        <Title id="title1" title='Our Services' subtitle='We supply and install industrial equipment of all sizes and types, We have specialized workshops on the maintenance of devices and equipment that we supply in accordance with the terms of the guarantees provided to our customers' />
        <Title subtitle='Our services in the industrial field with international companies' />
        <Services />
        <Title id="title2" title='Our Goal' subtitle='Our goal is to promote the industrial field and satisfy you by providing a service of high quality and reasonable prices and fast service, satisfactory and integrated customers. Achieving high efficiency and improving the speed of supply, installation and follow-up' />
        <About setPlayState={setPlayState} />
        <Title id="title3" title='What we Offer' />

        <SolarPawer />
        <Title id="title4" title="MEET OUR STAFF" subtitle='' />
        <Staff />
        <Title id="title5" title="CONTACT US" subtitle="GET IN Touch" />
        <Contact />


        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
