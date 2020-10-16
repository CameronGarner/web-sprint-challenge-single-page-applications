describe("new order submission",function(){
    beforeEach(function() {
        cy.visit('http://localhost:3000/pizza')
      })

      let nameinput = function(){
          return cy.get('input[name="name"]')
      }

      let pepperoni = function(){
        return cy.get('input[name="pepperoni"]')
      }

      let sausage = function(){
        return cy.get('input[name="sausage"]')
      }

      let submitbtn = function(){
          return cy.get("input[type='submit'")
      }

      it("can type inside the inputs",function(){
        nameinput()
        .should("have.value","")
        .type("Cameron")
        .should("have.value","Cameron")
      })

      it("can select multiple toppings",function(){
          pepperoni().click()
          sausage().click()
      })

      it("can submit the form",function(){
          submitbtn().click()
      })
})