
export class LoginPage{

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    pwd_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'
    enterUsername(username){
        cy.get(this.username_textbox).type(username)

    }
    enterPassword(pwd){
        cy.get(this.pwd_textbox).type(pwd)

    }
    clickLogin(){
        cy.get(this.login_button).click()

    }
}