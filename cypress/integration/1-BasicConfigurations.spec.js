import describeOnBranches from '../utils/describeOnBranches';

describeOnBranches('basic-configurations')('Basic Configurations', () => {
  // it('.eslintrc.json exist', () => {
  //   cy.readFile('.eslintrc.json')
  // });
  it('Commintlint.config.js exist', () => {
      cy.readFile('commitlint.config.js')
  });
  it('Cypress.json exist', () => {
    cy.readFile('cypress.json')
});

});
