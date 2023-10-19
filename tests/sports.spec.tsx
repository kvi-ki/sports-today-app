import { expect, test } from '@playwright/test';

test(`should mock a match and doesn't call api`, async ({ page }) => {
  await page.route('*/**/api/matches', async (route) => {
    const json = [
      {
        day: '2023-10-12',
        matches: [
          {
            startAt: '2023-10-12T16:00:00Z',
            league: '',
            homeTeam: 'Letonia',
            homeTeamLogo:
              'https://sportstves.b-cdn.net/teams/mini_407_201910120844.png',
            awayTeam: 'Armenia',
            awayTeamLogo:
              'https://sportstves.b-cdn.net/teams/mini_219_20140427.png',
            channels: [
              {
                name: 'UEFA TV',
                paid: false
              }
            ]
          }
        ]
      }
    ];

    await route.fulfill({ json });
  });

  await page.goto('https://deportes-hoy.herokuapp.com/api/matches');

  await expect(page.getByText('Letonia')).toBeVisible();
});

test.describe.parallel('API testing', () => {
  const baseUrl = 'https://deportes-hoy.herokuapp.com/api';

  test('should assert response status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/matches`);

    expect(response.status()).toBe(200);
  });

  test('should assert invalid endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/not-exosted-matches`);

    expect(response.status()).toBe(404);
  });
});
