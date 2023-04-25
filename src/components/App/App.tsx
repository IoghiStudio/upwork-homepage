import React from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer';
import { Subnav } from '../Subnav';
import { RebrandHero } from '../RebrandHero';
import { HowToHire } from '../HowToHire';

export const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>

      <Subnav />

      <main className="app__main">
        <div className="app__rebrandhero">
          <RebrandHero />
        </div>

        <HowToHire />
      </main>
      <Footer />
    </div>
  );
}
