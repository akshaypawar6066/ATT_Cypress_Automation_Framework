
describe('Intercept In Cypress', () => {
   let resBody;
    before('Getting Body for json response output', ()=>
    {
        cy.log('Fetching body for request:')
       cy.fixture('Intercept.json').then((data)=>
       {
        resBody=data;
       })
    })
    it('Test API With simple intercept', () => {
        cy.visit('https://dummyapi.io/explorer');
        cy.intercept(
            {
                path: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
            }
        ).as('comments');

        cy.xpath("//div[text()='Comments List']").click();
        cy.wait('@comments').then((interceptResponse) => {
            cy.log(JSON.stringify(interceptResponse));
        })
    })


    it.skip('Test API With simple intercept and create stub for response', () => {
        cy.visit('https://dummyapi.io/explorer');
        cy.intercept(
            {
                method: 'GET',
                url: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'

            },
            {
                statusCode: 200,
                body: { message: 'This is stubbed response', createdBy: 'Akshay' }
            }
        ).as('comments');
        cy.xpath("//div[text()='Comments List']").click({force:true});
        cy.wait('@comments').then((interceptResponse) => {
            cy.log(JSON.stringify(interceptResponse));
            console.log(JSON.stringify(interceptResponse));
            expect(interceptResponse.response.body.createdBy).to.equal('Akshay');
            expect(interceptResponse.response.statusCode).to.equal(200);
            expect(interceptResponse.response.body.message).to.equal('This is stubbed response');

        })
    })


    it.skip('Test API With simple intercept and create stub for response using fixture file', () => {
        cy.visit('https://dummyapi.io/explorer');
        cy.intercept(
            {
                method: 'GET',
                url: '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'

            },
            {
                statusCode: 200,
                body: resBody
            }
        ).as('comments');
        cy.xpath("//div[text()='Comments List']").click({force:true});
        cy.wait('@comments').then((interceptResponse) => {
            cy.log(JSON.stringify(interceptResponse));
            console.log(JSON.stringify(interceptResponse));
            expect(interceptResponse.response.body.createdBy).to.eq('Akshay');
            expect(interceptResponse.response.statusCode).to.equal(200);
        })
    })
})