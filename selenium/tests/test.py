from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.common.exceptions import TimeoutException

import json
import re


def does_load(driver: webdriver.Chrome) -> None:
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "class-selector-from"))
    )
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "selected-class"))
    )

    driver.find_element(By.ID, "selected-class").is_displayed()

    driver.execute_script(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed", "reason": "Website loaded successfully"}}'
    )


def close_welcome_message(driver: webdriver.Chrome) -> None:
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located(
            (By.CSS_SELECTOR, "#welcome-wrapper #close-action")
        )
    )
    driver.find_element(By.CSS_SELECTOR, "#welcome-wrapper #close-action").click()

    if len(driver.find_elements(By.ID, "welcome-wrapper")) == 0:
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed", "reason": "Welcome message closed successfully"}}'
        )
    else:
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Welcome message could not be closed"}}'
        )

    driver.refresh()

    try:
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "welcome-wrapper"))
        )

        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed", "reason": "Welcome message pops up again after refresh"}}'
        )
    except TimeoutException:
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Welcome message does not pop up again after refresh"}}'
        )
        return


def close_welcome_message_with_button(driver: webdriver.Chrome) -> None:
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located(
            (By.CSS_SELECTOR, "#welcome-wrapper #action > button")
        )
    )

    driver.find_element(By.CSS_SELECTOR, "#welcome-wrapper #action > button").click()

    if len(driver.find_elements(By.ID, "welcome-wrapper")) == 0:
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed", "reason": "Welcome message closed successfully"}}'
        )
    else:
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Welcome message could not be closed"}}'
        )

    driver.refresh()

    try:
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "welcome-wrapper"))
        )

        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Welcome message pops up again after refresh (never show again button does not work)"}}'
        )

    except TimeoutException:
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed", "reason": "Welcome message does not pop up again after refresh"}}'
        )
        return


def test_today_button(driver: webdriver.Chrome) -> None:
    driver.get("https://stundenplan.bbzbl-it.dev/?period=18-12-2023")

    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "today-button"))
    )

    driver.find_element(By.ID, "today-button").click()

    if re.match(
        r"https://stundenplan.bbzbl-it.dev/?.*period=now.*", driver.current_url
    ):
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed", "reason": "Today button works"}}'
        )
    else:
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Today button does not work"}}'
        )
    driver.current_url


def main(driver: webdriver.Chrome) -> None:
    driver.get("https://stundenplan.bbzbl-it.dev/?period=18-12-2023")

    # Test if Page loads
    try:
        does_load(driver)
    except (NoSuchElementException, TimeoutException) as ex:
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": "Website did not load '
            + ex.msg
            + '" }}'
        )

    close_welcome_message(driver)

    close_welcome_message_with_button(driver)

    test_today_button(driver)


if __name__ == "__main__":
    options = ChromeOptions()
    options.set_capability("sessionName", "Stundenplaner - Selenium Test")
    driver = webdriver.Chrome(options=options)

    try:
        main(driver)

    except Exception as err:
        message = "Exception: " + str(err.__class__) + str(err.msg)
        driver.execute_script(
            'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed", "reason": '
            + json.dumps(message)
            + "}}"
        )
