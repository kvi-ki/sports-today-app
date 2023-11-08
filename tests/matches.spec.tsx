import { expect, test } from '@playwright/test';
import responseContent from './response.json' assert { type: 'json' };

test('should print home teams list', async ({ page }) => {
  await page.route('*/**/api/matches', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      json: responseContent
    });
  });

  await page.goto('/');

  await expect(page.getByText('Letonia')).toBeVisible();
  await expect(page.getByText('Feyenoord')).toBeVisible();
  await expect(page.getByTestId('homeTeam')).toHaveCount(4);
});
