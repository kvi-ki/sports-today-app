import { expect, test } from '@playwright/test';

const apiResponse = [
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
      },
      {
        startAt: '2023-10-12T19:00:00Z',
        league: '',
        homeTeam: 'Sevilla',
        homeTeamLogo: 'https://sportstves.b-cdn.net/teams/mini_12_20130125.png',
        awayTeam: 'Arsenal',
        awayTeamLogo:
          'https://sportstves.b-cdn.net/teams/mini_126_20130210.png',
        channels: [
          {
            name: 'M+ Liga de Campeones 2',
            paid: true
          },
          {
            name: 'M+ Liga de Campeones 4',
            paid: true
          }
        ]
      }
    ]
  },
  {
    day: '2023-10-25',
    matches: [
      {
        startAt: '2023-10-25T16:45:00Z',
        league: '',
        homeTeam: 'Feyenoord',
        homeTeamLogo:
          'https://sportstves.b-cdn.net/teams/mini_284_20140906.png',
        awayTeam: 'Lazio',
        awayTeamLogo:
          'https://sportstves.b-cdn.net/teams/mini_167_20130919.png',
        channels: [
          {
            name: 'M+ Liga de Campeones 3',
            paid: true
          }
        ]
      },
      {
        startAt: '2023-10-25T16:45:00Z',
        league: '',
        homeTeam: 'Barcelona',
        homeTeamLogo: 'https://sportstves.b-cdn.net/teams/mini_2_20130125.png',
        awayTeam: 'Shaktar Donetsk',
        awayTeamLogo: 'https://sportstves.b-cdn.net/teams/mini_0_20130207.png',
        channels: [
          {
            name: 'M+ Liga de Campeones',
            paid: true
          }
        ]
      }
    ]
  }
];

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

  test('should get match detail', async ({ page }) => {
    await page.route('*/**/api/matches', async (route) => {
      const json = apiResponse;

      await route.fulfill({ json });
    });

    await page.goto('https://deportes-hoy.herokuapp.com/api/matches');

    await expect(page.getByText('Letonia')).toBeVisible();
  });
});
