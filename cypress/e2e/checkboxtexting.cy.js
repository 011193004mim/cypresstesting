describe('contains command' , ()=>{
    it('Verify login validation', ()=> {
        cy.visit('https://www.jotform.com/form/223221593927458')

        
        
        cy.get('input[type="checkbox"]').check()
        
    
        
        cy.get('input[type="checkbox"]'). uncheck()
        
      
        
        cy.get('input[type="checkbox"]').check(['Free Estimate', 'Information Request'])
        cy.get('input[type="checkbox"]').should('have.legth', 4)
        })
        
        it('Validate Radio Button', function(){
    })

  
  })