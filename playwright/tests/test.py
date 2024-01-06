from playwright.sync_api import Page, TimeoutError as PlaywrightTimeoutError
import re


def mark_test_status(status, reason, page):
    page.evaluate("_ => {}",
                  "browserstack_executor: {\"action\": \"setSessionStatus\", \"arguments\": {\"status\":\"" + status + "\", \"reason\": \"" + reason + "\"}}");


def test_page_load(page: Page) -> None:
    try:
        page.goto("https://stundenplan.bbzbl-it.dev/?period=18-12-2023", wait_until="domcontentloaded")
        page.wait_for_selector("#class-selector")
    except PlaywrightTimeoutError:
        mark_test_status("failed", "Page does not load", page)
        return


    mark_test_status("passed", "Page does load", page)



def test_close_welcome_message(page: Page) -> None:
    page.goto("https://stundenplan.bbzbl-it.dev/?period=18-12-2023", wait_until="domcontentloaded")

    page.locator("#welcome-wrapper #close-action").click()

    # CHeck if the welcome message is not visible anymore
    if not page.is_visible("#welcome-wrapper"):
        mark_test_status("passed", "Welcome message clossed sucessfully", page)

    else:
        mark_test_status("failed", "Welcome message could not be clossed", page)
        

    page.reload(wait_until="domcontentloaded")


    if page.is_visible("#welcome-wrapper"):
        mark_test_status("passed", "Welcome message did appear again", page)
    else:
        mark_test_status("failed", "Welcome message did not appear after reload", page)

def test_close_welcome_message_with_button(page: Page) -> None:
    page.goto("https://stundenplan.bbzbl-it.dev/?period=18-12-2023", wait_until="domcontentloaded")

    page.locator("#welcome-wrapper #action > button").click()

    if not page.is_visible("#welcome-wrapper"):
        mark_test_status("passed", "Welcome message clossed sucessfully", page)

    else:
        mark_test_status("failed", "Welcome message could not be clossed", page)

    page.reload(wait_until="domcontentloaded")

    if page.is_visible("#welcome-wrapper"):
        mark_test_status("failed", "Welcome message did appear again", page)
    else:
        mark_test_status("passed", "Welcome message did not appear after reload", page)


def test_today_button(page: Page) -> None:
    
    page.goto("https://stundenplan.bbzbl-it.dev/?period=18-12-2023", wait_until="domcontentloaded")
    page.evaluate("() => window.localStorage.setItem(\"hideWelcomeMessage\", \"true\")")

    page.reload(wait_until="domcontentloaded")

    page.locator("#today-button").click()

    if re.match(
        r"https://stundenplan.bbzbl-it.dev/?.*period=now.*", page.url
    ):
        mark_test_status("passed", "Today button works", page)

    else:
        mark_test_status("failed", "Today button does not work", page)
