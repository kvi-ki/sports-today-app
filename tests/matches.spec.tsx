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

test('should print home teams list', async ({ page }) => {
  await expect(page.getByText('Letonia')).toBeVisible();
  await expect(page.getByText('Feyenoord')).toBeVisible();
});

test('should print date of matches in a formate of weekday, day and month', async ({
  page
}) => {
  await expect(page.getByText('Martes, 24 de octubre')).toBeVisible();
  await expect(page.getByText('Miércoles, 25 de octubre')).toBeVisible();
  await expect(page.getByTestId('date')).toHaveCount(2);
});
