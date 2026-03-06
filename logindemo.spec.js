import {test,expect} from'@playwright/test';
test ('Google testing',async ({page})=>{
   await page.goto ("https://adactinhotelapp.com/");
   await page.fill ('#username','haristester01');
   await page.fill ('#password','haristester01');
   await page.click ('#login');
   await expect (page.locator('.welcome_menu').first()).toHaveText("Welcome to Adactin Group of Hotels");
});