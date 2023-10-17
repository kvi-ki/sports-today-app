import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('should render homeTeam', async ({ page }) => {
  await expect(page.getByTestId('homeTeam')).toHaveText('Letonia');
});
