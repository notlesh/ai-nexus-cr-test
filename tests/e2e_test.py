import pytest
from playwright.sync_api import sync_playwright


def test_website_loads():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:8000")  # Assuming the website is served locally on port 8000
        assert page.title() != "", "Website title should not be empty"
        browser.close()
