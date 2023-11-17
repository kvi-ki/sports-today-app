import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('should have title', async ({ page }) => {
  await expect(page).toHaveTitle('Deportes Hoy');
});

test('should show date as Hoy', async ({ page }) => {
  expect(page.getByTestId('date')[0]).toBe('Hoy');
});
