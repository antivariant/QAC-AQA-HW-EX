const { remote } = require("webdriverio");

const capabilities = {
    'appium:platformName': 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': 'iPhone 14 Pro Max',
    'appium:platformVersion': '16.4',    
    'appium:app': '/Users/antivariant/Library/Developer/Xcode/DerivedData/'+
            'test-ddhclpgocqlynlaukxjsjanirhih/Build/Products/Debug-iphonesimulator/test.app',
    'appium:bundleId': 'com.antivariantum.test'
}

const wdOpts = {
    host: process.env.APPIUM_HOST || 'loclahost',
    port: parseInt(process.env.APPOUM_PORT, 10) || 4723,
    logLevel: 'error',
    capabilities
}

async function runTest() {

    const driver = await remote(wdOpts);
    try {
        const batteryItem = await driver.$('//*[@text="Hello, world!"]')
        await batteryItem.click();
    }
    finally {
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

runTest().catch(console.error);