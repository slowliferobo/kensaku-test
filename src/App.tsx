import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/HeroSection';
import AnimalsSection from './components/AnimalsSection';
import HabitatsSection from './components/HabitatsSection';
import RulesSection from './components/RulesSection';
import PlayersSection from './components/PlayersSection';
import './styles.css';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <AnimalsSection />
        <HabitatsSection />
        <RulesSection />
        <PlayersSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;