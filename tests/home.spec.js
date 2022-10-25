// import { test } from "@playwright/test"
// import { test, expect } from "./baseFixtures"
import { test, expect } from "playwright-test-coverage"

test("homepage", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/^Blog\s\|\sJankariTech$/)
  await expect(page.locator(".appbar--logo")).toBeVisible()
  await expect(page.locator(".blog-peek")).toHaveCount(34)
})
