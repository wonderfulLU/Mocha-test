/// <reference types="cypress"/> 

describe('Show toast', () => {    

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-light-theme.jpg"]').click();
        cy.get('[title="Modal & Overlays"]').click();
        cy.get('[title="Toastr"]').click();
    });

        const Toasts = [{
            testData: {
                position: '#nb-option-28', //.should('have.value', 'top-end');
                title: 'test1',
                content: 'test content1',
                time: '10000',
                type: '#nb-option-33' //.should('have.value', 'success');
            },
            expectedResult: {
                icon: 'checkmark',
                color: 'rgb(96, 175, 32)',
                position: 'justify-content: flex-end; align-items: flex-start;' 
            }},
            {
            testData: {
                position: '#nb-option-25', //.should('have.value', 'top-left');
                title: 'test2',
                content: 'test content2',
                time: '20000',
                type: '#nb-option-34' //.should('have.value', 'info');
            },
            expectedResult: {
                icon: 'question-mark',                    
                color: 'rgb(4, 149, 238)',
                position: 'justify-content: flex-start; align-items: flex-start;' 
            }},
            {
            testData: {
                position: '#nb-option-29', //.should('have.value', 'top-start');
                title: 'test3',
                content: 'test content3',
                time: '30000',
                type: '#nb-option-36' //.should('have.value', 'danger');
            },
            expectedResult: {
                icon: 'flash',                    
                color: 'rgb(176, 0, 32)',
                position: 'justify-content: flex-start; align-items: flex-start;' 
            }},
            {
            testData: {
                position: '#nb-option-26', //.should('have.value', 'bottom-left');
                title: 'test4',
                content: 'test content4',
                time: '10000',
                type: '#nb-option-35' //.should('have.value', 'warning');
            },
            expectedResult: {
                icon: 'alert-triangle',                    
                color: 'rgb(255, 159, 5)',
                position: 'justify-content: flex-start; align-items: flex-end;' 
            }}    
        ]                
      
    Toasts.forEach(({ testData, expectedResult }) => {

    it(`Toast ${testData.title}`, () => {
            
        cy.get('.position-select [class="select-button"]').click();
        cy.get(testData.position).click(); 
        cy.get('[name="title"]').clear().type(testData.title);
        cy.get('[name="content"]').clear().type(testData.content);
        cy.get('nb-select [type="button"]').eq(2).click();
        cy.get(testData.type).click(); 
        cy.get('[name="timeout"]').clear().type(testData.time);
        cy.get('button.mat-ripple.status-basic').click();        

          cy.get('nb-toastr-container .destroy-by-click.has-icon').should('be.visible');
          cy.get('nb-toast .icon-container').should('exist');
          cy.get('nb-toastr-container nb-toast').should('have.css', 'background-color').and('eq', expectedResult.color);
          cy.get('nb-toast g [data-name]').should('have.attr', 'data-name', expectedResult.icon);
          cy.get('[class="title subtitle"]').should('contain', testData.title);
          cy.get('[class="message"]').should('contain', testData.content);          
          cy.get('.toastr-overlay-container').should('have.attr', 'style', expectedResult.position);
        })
    })
})
       
