/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import Home from './pages/Home';
import { A, Route, Router, Routes } from '@solidjs/router';
import Foglalkozasok from './pages/Foglalkozasok';
import Foglalkozas from './pages/Foglalkozas';

const root = document.getElementById('root');

render(() => (
  <>
    <Router>
      <header>
        <A href='/'>SZLGTESI</A>
      </header>
      
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/foglalkozasok/" component={Foglalkozasok} />
        <Route path="/foglalkozasok/:id/" component={Foglalkozas} />
      </Routes>
    </Router>
  </>),
  root!
);