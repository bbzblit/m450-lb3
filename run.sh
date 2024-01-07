#!/bin/bash

# Scriptheaders are for noobs :)

export $(cat .env | xargs)

echo "Starting Playwright tests..."

cd playwright

. venv/bin/activate

PLAYWRIGHT_URL="https:$(browserstack-sdk pytest -s ./tests/test.py | grep "View build on BrowserStack dashboard:" | rev | cut -d ":" -f 1 | rev)"

cd ..

echo "Finished Playwright tests..."


echo "Starting Selenium tests..."

cd selenium

. venv/bin/activate

SELENIUM_URL="https:$(browserstack-sdk python ./tests/test.py | grep "View build on BrowserStack dashboard:" | rev | cut -d ":" -f 1 | rev)"

cd ..

echo "Finished Selenium tests..."

echo "Starting Puppeteer tests..."

cd puppeteer 

node test.spec.js > /dev/null 

echo "Finished Puppeteer tests..."

echo -e "\n\n\n"

echo "#####################"

echo "Playwright Report: $PLAYWRIGHT_URL"

echo "Selenium Report: $SELENIUM_URL"

echo "Puppeteer has no report. View test results in the web console."

echo "#####################"
