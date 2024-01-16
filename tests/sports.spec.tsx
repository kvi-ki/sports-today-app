import { expect, test } from '@playwright/test';

const baseUrl = process.env.API_URL + '/api';

test('should assert response status', async ({ request }) => {
  const response = await request.get(`${baseUrl}/matches`);

  expect(response.status()).toBe(200);
});

test('should assert invalid endpoint', async ({ request }) => {
  const response = await request.get(`${baseUrl}/not-existed-matches`);

  expect(response.status()).toBe(404);
});
