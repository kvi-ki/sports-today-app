import { expect, test } from '@playwright/test';

test(`should mock a match and doesn't call api`, async ({ page }) => {
  await page.route('*/**/api/matches', async (route) => {
    const json = [
      {
        matches: {
          homeTeam: 'Real Madrid Fem.',
          awayTeam: 'Torre del Mar'
        }
      }
    ];
    await route.fulfill({ json });
  });

  await page.goto('https://deportes-hoy.herokuapp.com/api/matches');

  await expect(page.getByText('Real Madrid Fem.')).toBeVisible();
});
