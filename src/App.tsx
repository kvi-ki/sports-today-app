import './App.css';
import './index.css';

import Header from './components/header/Header';
import Matches from './components/matches/Matches';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Matches />
    </QueryClientProvider>
  );
}
