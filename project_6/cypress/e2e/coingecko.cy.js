// cypress/e2e/coingecko.js

describe('CoinGecko Website Tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it('Should visit CoinGecko homepage', () => {
    cy.visit('/');
    cy.url().should('eq', Cypress.config().baseUrl);
  });

  it('Should display the CoinGecko logo', () => {
    cy.get('a.navbar-brand').should('be.visible');
  });

  it('Should navigate to the CoinGecko homepage when logo is clicked', () => {
    cy.get('a.navbar-brand').click({ multiple: true, force: true });
    cy.url().should('eq', Cypress.config().baseUrl);
  });

  it('Should display the search input field', () => {
    cy.get('input.searchbar-input').should('be.visible');
  });

  it('Should navigate to portfolio', () => {
    cy.get('li.navbar-portfolio, li.navbar-portfolio-mobile')
      .should('be.visible')
      .eq(1)
      .click();
    cy.url().should('include', '/portfolio');
  });

  it('Should navigate to news', () => {
    cy.get('a[href="/news/list/latest/"]')
      .should('be.visible')
      .click({multiple: true, force: true});
    cy.url().should('include', '/news');
  });

  it('Should open Forum tab', () => {
    cy.get('a[ng-click="select()"]')
      .contains('Forum')
      .should('be.visible')
      .click({multiple: true, force: true});
    cy.get('forum-post-no-reply').should('be.visible');
  });

  it('Should display Bitcoin icon', () => {
    cy.visit('/coins/btc/overview/USDT');
    cy.get('img.img-responsive').should('be.visible');
  });

  it('Should display Bitcoin chart', () => {
    cy.visit('/coins/btc/overview/USDT');
    cy.get('div.chart-widget').should('be.visible');
  });

  it('Should display footer', () => {
    cy.get('div.footer').should('be.visible');
  });

  it('Should navigate to about us section', () => {
    cy.get('li[role="presentation"]')
      .contains('About us')
      .should('be.visible')
      .click({force: true});
    cy.url().should('include', '/about-us');
  });

  it('Should hide cookie notification', () => {
    cy.get('div.cookies-actions')
      .should('be.visible')
      .get('a[ng-click="hideCookieNotification()"]')
      .click({force: true})
      .should('not.be.visible');
  });

  it('Should navigate to Bitcoin page after clicking the button', () => {
    cy.get('td.name > a[ng-href]')
      .contains('Bitcoin')
      .should('be.visible')
      .click({force: true});
    cy.url().should('include', '/btc');
  });

  it('Should display login container', () => {
     cy.get('ul.navbar-right > li.login-button > a[ng-click="showLogin()"]')
        .should('be.visible')
        .click({multiple: true, force: true})
        .get('div.modal-content')
        .contains('Sign in')
        .should('be.visible');
  });

  it('Should check Top Lists dropdown', () => {
    cy.get('li.dropdown > a.dropdown-toggle')
      .contains('Top Lists')
      .should('be.visible')
      .click({force: true})
    cy.get('li.dropdown.open');
  });

  it('Should search for Bitcoin and redirect to its page', () => {
    cy.get('div.search-top.pull-left.hidden-xs.ng-scope > form > div > input')
      .type('Bitcoin')
      .get('a.typeahead-result-option')
      .contains('Bitcoin')
      .click({force: true});
    cy.url().should('include', '/btc')
  });

  it('Should redirect to all coins list', () => {
    cy.get('div > div.table-coins-footer > a')
      .contains('View All')
      .click({force: true});
    cy.url().should('include', '/coins/list')
  });

  it('Should check page switching in coins list', () => {
    cy.get('div > div.table-coins-footer > a')
      .contains('View All')
      .click({force: true});
    cy.get('div.pull-right.pagination-controls > a')
      .contains('Next Page')
      .click({force: true});
    cy.url().should('include', '2')
  });

  it('Should check coin news tab', () => {
    cy.visit('/coins/btc/overview/USD');
    cy.get('ul.nav.nav-tabs.nav-sections.pull-left.hidden-xs > li.secmenu-news.hidden-xs.hidden-sm.hidden-md > a')
      .contains('News')
      .click({force: true})
      .get('news-list-coin > div > div > div.ng-scope')
      .should('be.visible');
  });

  it('Should check coin news tab', () => {
    cy.get('homepage-top-list > div > div > ul > li.tab-rankings-Gambling > a')
      .contains('Gambling')
      .click({force: true})
      .get('div.tab-pane.ng-scope.active > div > div.panel-body > table')
      .should('be.visible');
  });

});
