import { Given, Then } from '@cucumber/cucumber'

Given(/^I am on the login page (.+)$/, async function (pageurl:string) 
{
    await browser.url(pageurl)
    await browser.pause(4000)
});

Then(/^I can validate the page UI$/, async function () 
{
   await browser.maximizeWindow()
});