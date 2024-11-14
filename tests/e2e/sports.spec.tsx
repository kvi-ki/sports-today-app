import { expect, test } from '@playwright/test';

test.describe('API call', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL + '/api';

  test('should assert response status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/matches`);

    expect(response.status()).toBe(200);
  });

  test('should assert invalid endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/not-existed-matches`);

    expect(response.status()).toBe(404);
  });
});
