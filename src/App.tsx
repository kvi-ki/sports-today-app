import './App.css';
import './index.css';

import Header from './components/header/Header';
import Matches from './components/matches/Matches';

export default function App() {
  return (
    <main className="bg-gradient-to-r from-cyan to-indigo">
      <Header />
      <Matches />
    </main>
  );
}
