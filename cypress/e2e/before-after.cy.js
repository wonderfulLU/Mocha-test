describe("Before method", () => {

  before(() => { //запускається один раз перед сьютом; прекондішени, які постійно повторюються, можна винести  в before, для позбавлення дублювання коду
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  })

  it("Test 1", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
  
  it("Test 2", () => {
    // cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    // cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    // cy.get('[title="Forms"]').click();
    // cy.get('[title="Form Layouts"]').click();

    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })

})

describe("Before each method", () => {

  beforeEach(() => {  //запускається перед кожним тестом, який є всередині сьюта
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  })

  it("Test 1", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
  
  it("Test 2", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })


})


describe("After method", () => {

  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.log(`Open "Form Layouts" page ...`);
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  })

  after(() => { //виконується один раз після всього сьюта
    cy.log("HELLO")
  })

  it("Test 1", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
  
  it("Test 2", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
})

describe("After each method", () => { 

  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

    cy.log(`Open "Form Layouts" page ...`);
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  })

  afterEach(() => { //виконується afterEach після кожного тесту в тест сьюті, може бути в будь-якому місці в межах describe
    cy.log("HELLO")
  })

  it("Test 1", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
  
  it("Test 2", () => {
    cy.get('[placeholder="Jane Doe"]').type('Hello');
  })

})

/*afterEach(() => {  //якщо в самому кінці, то виконається після кожного тесту в УСІХ тест сьютах
  cy.log("HELLO!!!!!!!!!")
})*/



it.only("Test retries", {retries: 2}, () => { //цей варіант для нестабільного енвайроменту, вказуємо кількість повторювань тесту, після якого можемо вважати його зафейленим
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

  cy.log(`Open "Form Layouts" page ...`);
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click(); //можна поставити .jpgQ, щоб зафейлити спеціально
  cy.get('[title="Forms"]').click();
  cy.get('[title="Form Layouts"]').click();
  cy.get('[placeholder="Jane Doe"]').type('Hello');
})