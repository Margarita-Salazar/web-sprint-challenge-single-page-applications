// test
describe('Pizza App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })
    it('sanity checks', ()=>{
        expect(2).to.equal(2)
    })
   const specialInstInput = () => cy.get('input[name="special"]')
   const sauceRadioInput = () => cy.get('input[name="pepperoni"]')
   const submitBtn = () => cy.get('button')

   it('add text to input box', ()=>{})
   it('select multiple toppings', ()=>{})
   it('submit form', ()=>{})

})