import { expect, test } from '@playwright/test';
import responseContent from './response.json' assert { type: 'json' };

test.describe('Channel', () => {
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

  test('should print channels', async ({ page }) => {
    await expect(page.getByTestId('channel')).toHaveCount(5);
    await expect(page.getByText('UEFA TV')).toBeVisible();
    await expect(page.getByText('M+ Liga de Campeones 3')).toBeVisible();
  });

  test('should print not paid channel with orange border', async ({ page }) => {
    await expect(page.getByText('UEFA TV')).toHaveClass(/border-orange/);
  });

  test('should print paid channel with navy border', async ({ page }) => {
    await expect(page.getByText('M+ Liga de Campeones 4')).toHaveClass(
      /border-navy/
    );
  });
});
