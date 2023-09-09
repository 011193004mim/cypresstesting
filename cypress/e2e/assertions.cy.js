
describe ("Assertion Demo" , () => {
    it("Impicit assertions", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')
        cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible
        .and('exist') //logo exist

        cy.get("input [placeholder='Username']").type("Admin")
        cy.get("input [placeholder='Username']").should('habe.value','Admin') //alue checks

      
    })

    it("explicit assertions", ()=>{ 

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[placeholder='Username']").type("Admin")
        
        cy.get("input[placeholder='Password']").type("admin123")
        
        cy.get("button[type='submit']").click()

        let expName="Paul Collings";

cy.get(".oxd-userdropdown-name").then((x)=>{

let actName=x.text()

//BDD Style

expect (actName).to.equal(expName)

expect(actName).to.not.equal(expName)

//TDD Style

assert.equal(actName, expName)

assert.notEqual(actName, expName)

})
        
        })
})