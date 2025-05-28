import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class WebsiteTests(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome() # Make sure you have ChromeDriver installed and in your PATH
        self.base_url = "http://localhost:8000" # replace with your website url

    def test_homepage_title(self):
        driver = self.driver
        driver.get(self.base_url)
        self.assertIn("My Simple Website", driver.title)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
