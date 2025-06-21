import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import Packages from './components/Packages';
import LoginModal from './components/LoginModal';
import PaymentModal from './components/Payment';
import Contact from './components/contact';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setShowPayment(true);
  };

  return (
    <div>
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <Hero />
      <Explore/>
      <Packages onBook={handleBookNow} />
      <Contact/>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        <PaymentModal
        isOpen={showPayment}
        selectedPackage={selectedPackage}
        onClose={() => setShowPayment(false)}
      />
    </div>
  );
}

export default App;
