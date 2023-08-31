import {Builder, Capabilities, WebDriver} from 'selenium-webdriver';
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome()).build();

import {employeePage} from './employeeManagerPage';
const ep = new employeePage(driver)

describe('Page Object Test', () => {
    beforeEach(async () => {
        await ep.navigate()
    });
afterAll(async() =>{
    await ep.driver.quit()
})
test('adding employees with Page object', async ( )=> {
    await ep.click(ep.addEmployee);
    await ep.click(ep.newEmployee);
    await ep.sendKeys(ep.nameInput, 'Ganondorf');
    await ep.sendKeys(ep.phoneInput, 9876543210);
    await ep.sendKeys(ep.titleInput, 'King of Evil');
    await ep.click(ep.saveBtn);
})
})