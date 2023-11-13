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

test('should print date of matches', async ({ page }) => {
  await expect(page.getByText('2023-10-24')).toBeVisible();
  await expect(page.getByText('2023-10-25')).toBeVisible();
  await expect(page.getByTestId('date')).toHaveCount(2);
});
