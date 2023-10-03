import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('should have title', async ({ page }) => {
  await expect(page).toHaveTitle('Deportes Hoy');
});
