import React from 'react';
import './App.scss';
import { Header } from '../Top/Header/Header';
import { Footer } from '../Bottom/Footer';
import { Subnav } from '../Top/Subnav';
import { RebrandHero } from '../MenuSections/RebrandHero';
import { HowToHire } from '../MenuSections/HowToHire';
import { Category } from '../MenuSections/Category';
import { Skills } from '../MenuSections/Skills';
import { UkraineBanner } from '../MenuSections/UkraineBanner';
import { Testimonials } from '../MenuSections/Testimonials';
import { WhyUpwork } from '../MenuSections/WhyUpwork';
import { ForTalent } from '../MenuSections/ForTalent';
import { Enterprise } from '../MenuSections/Enterprise';
import { Deliver } from '../MenuSections/Deliver';


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

        <div className="app__enterprise">
          <Enterprise />
        </div>

        <div className="app__deliver">
          <Deliver />
        </div>

        <div className="app__whyupwork">
          <WhyUpwork />
        </div>

        <ForTalent />

        <div className="app__testimonials">
          <Testimonials />
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
