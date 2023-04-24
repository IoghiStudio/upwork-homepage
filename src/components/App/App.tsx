import React from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer';

export const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>

      <Footer />
    </div>
  );
}
