export class LoginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    navigate(url){
        cy.visit(url)
    }
    //typeScript
    // navigate(url: string){
    //     cy.visit(url)
    // }
    enterUserName(username){
        cy.get(this.loginPage_username).type(username)
    }
    enterPassword(pwd){
        cy.get(this.loginPage_password).type(pwd)
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
}