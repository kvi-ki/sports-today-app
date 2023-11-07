import { expect, test } from '@playwright/test';
import responseContent from './response.json' assert { type: 'json' };

test.beforeEach(async ({ page }) => {
  await page.route('*/**/api/matches', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      json: responseContent
    });
  });

  await page.goto('/');
});

test('should print time of matches', async ({ page }) => {
  await expect(page.getByTestId('time-test')).toHaveCount(8);
  await expect(page.getByTestId('time-test')).toBeVisible();
});
