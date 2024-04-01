import { test, expect } from '@playwright/test';

test('Web app tests', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');
  await expect(page).toHaveTitle('Create Turborepo');
  await expect(page.getByRole('link', { name: 'Docs -> Find in-depth' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Learn -> Learn more' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Templates -> Choose from over 15 examples' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Deploy -> Instantly deploy' })).toBeVisible();
});

test('Docs app tests', async ({ page }) => {
  await page.goto('http://127.0.0.1:3001/');
  await expect(page).toHaveTitle('Create Turborepo');
  await expect(page.getByRole('link', { name: 'Docs -> Find in-depth' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Learn -> Learn more' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Templates -> Choose from over 15 examples' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Deploy -> Instantly deploy' })).toBeVisible();
});
