import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://musical-pasca-16c8b2.netlify.app/');
});

test('should render header', async ({ page }) => {
  const header = page.locator('id=header');

  await expect(header).toContainText('Deportes Hoy');
});
