//для перевірки всіх можливих комбінацій значень
//коли всі дії ідентичні і відрізняються тільки дані вводу
//вводяться параметри всередину тесту, і тест виконується стільки разів, скільки параметрів ви передали
describe('Multiple tests', () => {
    const testGoogle = (testData, expectedResult) =>

    function () {
      cy.visit('https://google.com');
      cy.get('textarea.gLFyf').type(`${testData}`);
      cy.get('div.wM6W7d').should("contain", `${expectedResult}`) //.should перевыряэ, що елемент мыстить певний текст у даному випадку
    };

  it('search for CYPRESS', testGoogle('CYPRESS', 'cypress'));
  it('search for AUDI', testGoogle('AUDI', 'audi'));
  it('search for BMW', testGoogle('BMW', 'bmw'));
})

describe('Multiple tests', () => {
    const tests = [  //масив з об'єктами всередині
        {testData: 'CYPRESS', expectedResult: 'cypress'},
        {testData: 'AUDI', expectedResult: 'audi'},
        {testData: 'BMW', expectedResult: 'bmw'}
    ]

    tests.forEach(({testData, expectedResult}) => { //методом .forEach для кожного елементу масиву tests виконати наступні дії
        it(`Test ${testData}`, () => {
            cy.visit('https://google.com');
            cy.get('textarea.gLFyf').type(testData);
            cy.get('div.wM6W7d').should('contain', expectedResult);
        })
    })
})

describe('Multiple numbers tests', () => {
    const tests1 = [  //масив з об'єктами всередині
        {testDataNum: [3, 2, 1], expectedResult: '1'},
        {testDataNum: [3, 1, 2], expectedResult: '2'},
        {testDataNum: [1, 2, 3], expectedResult: '3'}
    ]

    tests1.forEach(({testDataNum, expectedResult}) => { //методом .forEach для кожного елементу масиву tests виконати наступні дії
        it(`Test ${testDataNum}`, () => {
            cy.visit('https://google.com');
            cy.get('textarea.gLFyf').clear().type(testDataNum[0]);
            cy.get('textarea.gLFyf').clear().type(testDataNum[1]);
            cy.get('textarea.gLFyf').clear().type(testDataNum[3]);
            cy.get('div.wM6W7d').should('contain', expectedResult);
        })
    })
})