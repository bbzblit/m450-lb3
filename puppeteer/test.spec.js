const puppeteer = require('puppeteer');
const expect = require('chai').expect;

async function setSessionStatus(page, status, reason) {
  await page.evaluate(_ => { }, `browserstack_executor: ${JSON.stringify({ action: 'setSessionStatus', arguments: { status: 'passed', reason: reason } })}`);
}

const main = async (cap) => {
  

  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://cdp.browserstack.com/puppeteer?caps=${encodeURIComponent(JSON.stringify(cap))}`,  // The BrowserStack CDP endpoint gives you a `browser` instance based on the `caps` that you specified
  });
  /* 
  *  The BrowserStack specific code ends here. Following this line is your test script.
  *  Here, we have a simple script that opens duckduckgo.com, searches for the word BrowserStack and asserts the result.
  */
  const page = await browser.newPage();

  await page.goto('https://stundenplan.bbzbl-it.dev/?period=18-12-2023');

  await page.waitForFunction(() => document.readyState === "complete");

  const classSelector = await page.$('[id="class-selector-from"]');

  if (!classSelector) {
    await setSessionStatus(page, 'failed', 'Page does not load');
    return;
  }

  await setSessionStatus(page, 'passed', 'Page does load');

  if (!await page.$('#welcome-wrapper')) {
    await setSessionStatus(page, 'failed', 'Welcome screen does not load');
    return;
  }

  await setSessionStatus(page, 'passed', 'Welcome screen does load');


  const welcomeClose = await page.$('#welcome-wrapper #close-action');

  if (!welcomeClose) {
    await setSessionStatus(page, 'failed', 'Welcome has no close button');
    return;
  }

  await setSessionStatus(page, 'passed', 'Welcome has close button');

  await welcomeClose.click();

  page.reload();

  await page.waitForFunction(() => document.readyState === "complete");

  if (!await page.$('#welcome-wrapper')) {
    await setSessionStatus(page, 'failed', 'Welcome screen does appear again');
    return;
  }

  await setSessionStatus(page, 'passed', 'Welcome screen does not appear again');


  const finalWelcomeClose = await page.$('#welcome-wrapper #action > button');

  if (!finalWelcomeClose) {
    await setSessionStatus(page, 'failed', 'Welcome has no close button');
    return;
  }

  await setSessionStatus(page, 'passed', 'Welcome has close button');

  await finalWelcomeClose.click();

  if (!await page.$('#welcome-wrapper')) {
    await setSessionStatus(page, 'failed', 'Welcome screen does appear again');
    return;
  }

  await setSessionStatus(page, 'passed', 'Welcome screen does not appear again');

  const todayButton = await page.$("#today-button");

  if (!todayButton) {
    await setSessionStatus(page, 'failed', 'Today button does not exist');
    return;
  }

  await setSessionStatus(page, 'passed', 'Today button does exist');

  await todayButton.click();

  if(!/https:\/\/stundenplan.bbzbl-it.dev\/?.*period=now.*/.test(page.url())) {
    await setSessionStatus(page, 'failed', 'Today button does not work');
    return;
  }

  await setSessionStatus(page, 'passed', 'Today button does work');

  await browser.close();
};

buildNumber = new Date().toISOString();

//  The following capabilities array contains the list of os/browser environments where you want to run your tests. You can choose to alter this list according to your needs
const capabilities = [
  {
    'browser': 'chrome',
    'browser_version': 'latest', 
    'os': 'osx',
    'os_version': 'Sonoma',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'firefox',
    'browser_version': 'latest', 
    'os': 'osx',
    'os_version': 'Ventura',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'chrome',
    'browser_version': 'latest',  
    'os': 'osx',
    'os_version': 'El Capitan',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'chrome',
    'browser_version': 'latest',
    'os': 'Windows',
    'os_version': '11',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'edge',
    'browser_version': 'latest',
    'os': 'Windows',
    'os_version': '7',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  }]

async function run() {
  for (const cap of capabilities) {
    
    cap['browserstack.username'] = process.env.BROWSERSTACK_USERNAME;
    cap['browserstack.accessKey'] = process.env.BROWSERSTACK_ACCESS_KEY;

    console.log(`Running test on ${cap.os} ${cap.os_version} ${cap.browser} ${cap.browser_version}`);
    
    await main(cap);

    console.log(`Test finished on ${cap.os} ${cap.os_version} ${cap.browser} ${cap.browser_version}`);
  }
}

run();

