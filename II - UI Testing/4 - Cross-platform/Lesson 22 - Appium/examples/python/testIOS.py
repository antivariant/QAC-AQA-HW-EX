import unittest
from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy

capabilities = dict(
    platformName='iOS',
    automationName='XCUITest',
    deviceName='iPhone 14 Pro Max',
    platformVersion = '16.4',
    appPackage='com.antivariantum.test',
    app='/Users/antivariant/Library/Developer/Xcode/DerivedData/'+
        'test-ddhclpgocqlynlaukxjsjanirhih/Build/Products/Debug-iphonesimulator/test.app',
    language='ru',
    locale='RU'
)

appium_server_url = 'http://localhost:4723'

class TestAppium(unittest.TestCase):
    def setUp(self) -> None:
        self.driver = webdriver.Remote(appium_server_url, capabilities)

    def tearDown(self) -> None:
        if self.driver:
            self.driver.quit()

    def test_find_hello(self) -> None:
        el = self.driver.find_element(by=AppiumBy.XPATH, value='//*[@name="Hello, world!"]')
        el.click()

if __name__ == '__main__':
    unittest.main()
    