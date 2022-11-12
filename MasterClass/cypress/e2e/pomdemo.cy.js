import { LoginPage } from './pages/login_page'

const loginPage = new LoginPage()

describe('All Login Tests', function () {

  beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')

  })
  it('Login Test 1', () => {

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item')

    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('.oxd-button').click()
  })

  it('Login Test 2', () => {

    loginPage.enterUsername('Admin12')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item')
  })
})

it('Login Test 3', () => {

  loginPage.enterUsername('Admin')
  loginPage.enterPassword('admin123')
  loginPage.clickLogin()
  cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item')
})
