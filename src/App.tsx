import React from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Features from './components/Feature';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Team, QuoteBanner } from './components/Team';

const App = () => {

  return (
    <div className="min-h-screen " style={{
      background: 'linear-gradient(160deg, rgb(255, 255, 255) 20%, rgb(235, 238, 250) 30%, rgb(211, 217, 244) 43%, rgb(214, 169, 199) 104%, rgb(223, 38, 75) 300%)'

    }}>
      <Navigation></Navigation>
      <Hero
        title={{
          main: "Connecting ",
          highlight: "lifelines of organizations"
        }}
        description="Elevate your business with cutting-edge solutions designed to drive growth 
                   and innovation in today's dynamic digital landscape."
        buttonText="Get Started"
        imageSrc=''
                imageAlt="Digital transformation illustration"
      />

      <Features></Features>
      <Team />
      <QuoteBanner />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;

