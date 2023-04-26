import React from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer';
import { Subnav } from '../Subnav';
import { RebrandHero } from '../RebrandHero';
import { HowToHire } from '../HowToHire';
import { Category } from '../Category';

export const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>

      <div className="app__subnav">
        <Subnav />
      </div>

      <main className="app__main">
        <div className="app__rebrandhero">
          <RebrandHero />
        </div>

        <div className="app__howtohire">
          <HowToHire />
        </div>

        <div className="app__category">
          <Category />
        </div>
      </main>
      <Footer />
    </div>
  );
}
