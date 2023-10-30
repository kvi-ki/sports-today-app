import { expect, test } from '@playwright/test';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { useMatches } from './api.mock';

const baseUrl = 'https://deportes-hoy.herokuapp.com/api';

test('should assert response status', async ({ request }) => {
  const response = await request.get(`${baseUrl}/matches`);

  expect(response.status()).toBe(200);
});

test('should assert invalid endpoint', async ({ request }) => {
  const response = await request.get(`${baseUrl}/not-exosted-matches`);

  expect(response.status()).toBe(404);
});

test.only('should get matches', async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result } = renderHook(() => useMatches(), { wrapper });

  await waitFor(() => expect(result.current).toBe(true));
});
