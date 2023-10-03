import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('should render header', async ({ page }) => {
  await page.setContent('<h1>Deportes Hoy</h1>');
});
