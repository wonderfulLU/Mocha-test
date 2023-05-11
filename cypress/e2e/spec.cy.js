//MOCHA - тестовий фреймворк, дозволяє реалізувати в коді тестову документацію (тест кейси, тест с'юти) з різною логікою і т.д.
describe("Positive test suit", () => { //тест с'ют  - -функціональний вираз, в якому зберігаються тести 
  //крім describe є  - - contest - - фактично те саме - -для структуризації файла
  it('Test 1', () => { //it - об'явлення тесту, ф-ція, що приймає 2 параметри - опис, анонімну колбек ф-цію
    cy.visit('https://example.com')
  })

  it('Test 2', () => {
    cy.visit('https://example.com')
  })

  it.skip('Test 3', () => { //пропустити певний кейс .skip 
    cy.visit('https://example.com')
  })

  it('Test 4', () => {
    cy.visit('https://example.com')
  })
})

describe("Negative test suit", () => {
  it('Test 1', () => {
    cy.visit('https://example.com')
  })

  it('Test 2', () => {
    cy.visit('https://example.com')
  })

  it('Test 3', () => {
    cy.visit('https://example.com')
  })

  it('Test 4', () => {
    cy.visit('https://example.com')
  })
})

describe("Some test suit", () => {
  it('Test 1', () => {
    cy.visit('https://example.com')
  })

  it('Test 2', () => {
    cy.visit('https://example.com')
  })

  it('Test 3', () => {
    cy.visit('https://example.com')
  })

  it('Test 4', () => {
    cy.visit('https://example.com')
  })
//вкладений тест с'ют, набір тестів, перед котрим треба зробити якусь дію, після прекондішенів
    describe("Some another test suit", () => {
    it('Test 1', () => {
      cy.visit('https://example.com')
    })

    it.only('Test 2', () => { //запуск конкретного тесту .only - -виконується тільки він з усього файлу
      cy.visit('https://example.com')
    })

    it('Test 3', () => {
      cy.visit('https://example.com')
    })

    it('Test 4', () => {
      cy.visit('https://example.com')
    })
})
  
})
  

