import React from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer';
import { Subnav } from '../Subnav';
import { RebrandHero } from '../RebrandHero';
import { HowToHire } from '../HowToHire';
import { Category } from '../Category';
import { Skills } from '../Skills';
import { UkraineBanner } from '../UkraineBanner';


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

        <div className="app__ukraine">
          <UkraineBanner />
        </div>

        <Skills />
      </main>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}
