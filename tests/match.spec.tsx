import { expect, test } from '@playwright/test';
import responseContent from './response.json';

test.describe('Hello', () => {
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
    //await expect(page.getByTestId('homeTeam')).toHaveCount(4);
  });

  test('should print away teams list', async ({ page }) => {
    await expect(page.getByText('Armenia')).toBeVisible();
    await expect(page.getByText('Lazio')).toBeVisible();
    //await expect(page.getByTestId('awayTeam')).toHaveCount(4);
  });

  test('should print teams banner', async ({ page }) => {
    await expect(page.getByAltText('team logo')).toHaveCount(8);
  });
});
