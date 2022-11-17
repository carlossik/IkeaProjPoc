import 'cypress/support/e2e'

Cypress.on('uncaught:exception', (err) => {
    console.log('Exception', err);
    return false;
});

const BACKEND_TIMEOUT = 15000;

const platforms = ['desktop', 'mobile'];

platforms.forEach((platform) => {
    describe(`LoyaltyHub, platform: ${platform}`, () => {
        let width;
        let height;
        let userAgent;
        let X_IKEA_M2;
        let customerToken;

        before(() => {
            cy.getAccessToken()
        });

        beforeEach(() => {
            if (platform === 'desktop') {
                width = 1920;
                height = 1080;
                // eslint-disable-next-line max-len
                userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36';
            } else {
                width = 320;
                height = 568;
                // eslint-disable-next-line max-len
                userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1';
            }

            cy.viewport(width, height);
            cy.clearCookies({ domain: null });

            cy.intercept('*', (req) => {
                req.headers['X-IKEA-M2'] = X_IKEA_M2;
                req.headers.userAgent = userAgent;
            });

            cy.task('getToken', {
                getAccessToken
            })
                .then((password) => {
                    if (!password) throw new Error('Failed to get users password');

                    // cy.task('getCustomerJwt', {
                    //     accountsApiUrl: Cypress.env('ACCOUNTS_API_URL') || 'https://devpt.accounts.ikea.com/oauth/token',
                    //     clientId: Cypress.env('PTClientID') || 'O3fEZGYhEiJ8o3c0Xqlj7dXsGOZ16fvw',
                    //     username: Cypress.env('PTusername'),
                    //     password:Cypress.env('PTpassword')
                     })
                        .then((cookie) => {
                            if (!cookie) throw new Error('Failed to get cookie');
                            getAccessToken = cookie;
                        });
                });
        });

        it('Should display rewards', () => {
            // cy.intercept('GET', '*/*/customer/rewards/pt', { fixture: 'rewards.json' }).as('getRewardsRequest');
            // cy.intercept('GET', '*/*/customer/balance', { fixture: 'balance.json' }).as('getBalanceRequest');
            // cy.intercept('GET', '*/*/customer/events/pt', { fixture: 'events.json' }).as('getEventsRequest');

            cy.setCookie('idp_reguser', getAccessToken);

            cy.visit('/pt/pt/loyalty-hub?features=rl-rewards');

            cy.get('button[id="onetrust-accept-btn-handler"]')
                .click();

            cy.get('#rewards-total-balance', {
                timeout: BACKEND_TIMEOUT,
            }).should(($el) => {
                const text = $el.text().trim();
                expect(text).not.to.equal('');
                expect(Number.isNaN(+text)).to.eq(false);
            });

            cy.get('.rewards__rewards-grid', {
                timeout: BACKEND_TIMEOUT,
            })
                .find('.rewards__rewards-card')
                .its('length')
                .should('be.gt', 0);
            cy.get('.rewards__survey')
                .should('be.visible');
            cy.get('.rewards__keys__balance-history-button__label > span')
                .click();
            cy.get('.rewards__balanceHistory', {
                timeout: BACKEND_TIMEOUT,
            })
                .get('#rewards--history-total', {
                    timeout: BACKEND_TIMEOUT,
                }).should(($el) => {
                    const text = $el.text().trim();
                    expect(text).not.to.equal('');
                    expect(Number.isNaN(+text)).to.eq(false);
                });
        });
    });

