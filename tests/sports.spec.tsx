import { expect, test } from '@playwright/test';

const baseUrl = 'https://deportes-hoy.herokuapp.com/api';

test('should assert response status', async ({ request }) => {
  const response = await request.get(`${baseUrl}/matches`);

  expect(response.status()).toBe(200);
});

test('should assert invalid endpoint', async ({ request }) => {
  const response = await request.get(`${baseUrl}/not-exosted-matches`);

  expect(response.status()).toBe(404);
});
