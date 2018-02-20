describe('Users can navigate between different health metric visualizations', () => {
  const getTabs = () => cy.get('.nav-tabs')
  const getTabLink = () => getTabs().children('li').children('a')

  before(() => {
    cy.goToHomePage()
  })

  it('contains tabs for different health metric visualizations', () => {
    getTabLink().contains('Duration')
    getTabLink().contains('Weight (kg)')
    getTabLink().contains('Body Fat %')
  })

  it('initially sees Duration visualization', () => {
    getTabs().children('.active').contains('Duration')
  })

  it('can navigate to Weight visualization', () => {
    getTabs().children('li:nth-child(2)').click()
    getTabs().children('.active').contains('Weight (kg)')
  })

  it('can navigate to Body Fat visualization', () => {
    getTabs().children('li:last').click()
    getTabs().children('.active').contains('Body Fat %')
  })
})

describe('Users can show the last 25 health metric records at once', () => {
  // `React Bootstrap Table` makes the table header elements their own table
  // So we must target the second table element.
  const getTable = () => cy.get('.table:last')

  before(() => {
    cy.goToHomePage()
  })

  it('starts by viewing the last 10 records', () => {
    getTable().children('tbody').children().should('have.length', 10)
  })

  it('can select the option to see 25 records at once', () => {
    cy.get('.dropdown').click()
    cy.get('.dropdown-menu').children('li:nth-child(2)').click()
  })

  it('can view the last 25 health records', () => {
    getTable().children('tbody').children().should('have.length', 25)
  })
})
