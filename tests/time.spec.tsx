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
  await expect(page.getByText('16:00')).toBeVisible();
  await expect(page.getByText('16:45').first()).toBeVisible();
  await expect(page.getByText(/\d{2}:\d{2}/)).toHaveCount(4);
  expect('19:00').toEqual(expect.stringMatching(/\d{2}:\d{2}/));
});
