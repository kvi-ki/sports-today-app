import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('should render header', async ({ page }) => {
  const header = page.locator('id=header');

  await expect(header).toContainText('Deportes Hoy');
});
