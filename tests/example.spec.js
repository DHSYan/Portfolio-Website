// @ts-check
import { test, expect } from '@playwright/test';

let local = 'localhost:3000/';

test('has title', async ({ page }) => {
  await page.goto(local);

  await page.screenshot({ path: 'screenshot.png' });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sean/);
});

test('About me link', async ({ page }) => {
  await page.goto(local);

  // Click the get started link.
  await page.getByRole('link', { name: 'About' }).first().click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
});
