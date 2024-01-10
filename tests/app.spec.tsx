import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('should have title', async ({ page }) => {
  await expect(page).toHaveTitle('Deportes Hoy');
});

test('should show today date as Hoy', async ({ page }) => {
  await expect(page.getByText('Hoy', { exact: true })).toBeVisible();
});
