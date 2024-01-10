'use client';

import dynamic from 'next/dynamic';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = dynamic(() => import('./App'), { ssr: false });

export default function Page() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}
