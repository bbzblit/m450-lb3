const puppeteer = require('puppeteer');
const expect = require('chai').expect;

async function setSessionStatus(page, status, reason) {
  await page.evaluate(_ => { }, `browserstack_executor: ${JSON.stringify({ action: 'setSessionStatus', arguments: { status: status, reason: reason } })}`);
}

const main = async (browser) => {
  
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

  try{
    await page.waitForFunction(() => document.URL.includes('period=now'), { timeout: 5000 });
  } catch{
    await setSessionStatus(page, 'failed', 'Today button does not work');
    return;
  }

  if(!/https:\/\/stundenplan.bbzbl-it.dev\/?.*period=now.*/.test(page.url())) {
    console.log(page.url());
    await setSessionStatus(page, 'failed', 'Today button does not work');
    return;
  }

  await setSessionStatus(page, 'passed', 'Today button does work');

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
    'browser': 'edge',
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
  },
  {
    'browser': 'edge',
    'browser_version': '102',
    'os': 'Windows',
    'os_version': '8',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'edge',
    'browser_version': '108',
    'os': 'Windows',
    'os_version': '8.1',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'edge',
    'browser_version': '118',
    'os': 'Windows',
    'os_version': '10',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'edge',
    'browser_version': 'latest',
    'os': 'Windows',
    'os_version': '11',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'chrome',
    'browser_version': 'latest',  
    'os': 'osx',
    'os_version': 'Monterey',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'chrome',
    'browser_version': '118',  
    'os': 'osx',
    'os_version': 'Big Sur',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  },
  {
    'browser': 'chrome',
    'browser_version': '116',  
    'os': 'osx',
    'os_version': 'Mojave',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  }, 
  {
    'browser': 'edge',
    'browser_version': '102',  
    'os': 'osx',
    'os_version': 'Sierra',
    "project": "Stundenplan Puppeteer",
    "build": `Stundenplan Puppeteer ${buildNumber}`,
  }, 
]

async function run() {
  for (const cap of capabilities) {
    
    cap['browserstack.username'] = process.env.BROWSERSTACK_USERNAME;
    cap['browserstack.accessKey'] = process.env.BROWSERSTACK_ACCESS_KEY;

    console.log(`Running test on ${cap.os} ${cap.os_version} ${cap.browser} ${cap.browser_version}`);
    
    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://cdp.browserstack.com/puppeteer?caps=${encodeURIComponent(JSON.stringify(cap))}`, 

      defaultViewport: { width: 1100, height: 768}
    },);
  
    await main(browser);

    await browser.close();

    console.log(`Test finished on ${cap.os} ${cap.os_version} ${cap.browser} ${cap.browser_version}`);
  }
}

run();

