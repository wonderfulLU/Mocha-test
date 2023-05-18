/// <reference types="cypress"/> 
describe('fill Herokuapp layout', () => {

    beforeEach(() => { 
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-light-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
      })
      
      /*afterEach(() => {
        cy.log("HELLO")
      })*/

    const firstCapital = function (s){
        if (s == null) return s;
         s[0] === s[0].toUpperCase();
         
         return s;
    };  

    const Inline_form = (name, email) =>

        function () {
        //let t = firstCapital(`${name}`);
        cy.get('[placeholder="Jane Doe"]').type(`${name}`).should('have.value', `${name}`);
        cy.get('[class~="form-inline"] [placeholder="Email"]').type(`${email}`).should('have.value', `${email}`);
        cy.get('.custom-checkbox').eq(0).click();
        cy.get('nb-checkbox[class="status-basic nb-transition"] [class="label"] [class="text"]').eq(0).should('contain', 'Remember me');
        cy.get('[class~="form-inline"] [type="submit"]').should('be.enabled').and('have.text', 'Submit');
        cy.get('[class~="form-inline"] [type="submit"]').click();
        cy.log("Submit")
        };
        
    it('Inline form', Inline_form('Anastasiia', 'email@mail.com'));
    it('Inline form1', Inline_form('аnastasiia', 'email@mail.com'));
    it('Inline form2', Inline_form('Anastasiia', 'emailmail.com'));
    it('Inline form3', Inline_form('Anastasiia', 'email@mailcom'));
    it('Inline form4', Inline_form('123', 'email@mail.com'));

    /*const Using_the_Grid = (email1, password) =>

        function () {
        cy.get('#inputEmail1').type(`${email1}`);
        cy.get('#inputPassword2').type(`${password}`);
        cy.get('.offset-sm-3.col-sm-9 [status="primary"][type="submit"]').click();
        cy.log("Submit")
        };
        
    it('Using the Grid', Using_the_Grid('2@mail.com', '225588'));

    const Basic_form = (email2, password1) =>

        function () {
        cy.get('#exampleInputEmail1').type(`${email2}`);
        cy.get('#exampleInputPassword1').type(`${password1}`);
        cy.get('[status="danger"][type="submit"]').click();
        cy.log("Submit")
        };
        

    it('Basic form', Basic_form('2@mail.com', '225588'));

    const Form_without_labels = (Recipients, Subject, Message) =>

        function () {
        cy.get('[placeholder="Recipients"]').type(`${Recipients}`);
        cy.get('[placeholder="Subject"]').type(`${Subject}`);
        cy.get('[placeholder="Message"]').type(`${Message}`);
        cy.get('button[ng-reflect-status="success"]').click();
        cy.log("Submit")
        };
        

    it('Form without labels', Form_without_labels('monkeys', 'IQ test', 'some text'));

    const Block_form = (FirstName, LastName, email3, Website) =>

        function () {
        cy.get('#inputFirstName').type(`${FirstName}`);
        cy.get('#inputLastName').type(`${LastName}`);
        cy.get('#inputEmail').type(`${email3}`);
        cy.get('#inputWebsite').type(`${Website}`);
        cy.get('button[type="submit"].status-basic').click();
        cy.log("Submit")
        };
        

    it('Block form', Block_form('Anastasiia', 'Lushkova', '2@mail.com', 'https://chat.openai.com/'));

    const Horizontal_form = (email3, password2) =>

        function () {
        cy.get('#inputEmail3').type(`${email3}`);
        cy.get('#inputPassword3').type(`${password2}`);
        cy.get('button[status="warning"]').click();
        cy.log("Submit")    
        };
        
    it('Horizontal form', Horizontal_form('3333@mail.com', 'qqqwwweee'));*/
    
})


    

