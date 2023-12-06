
describe('API Chanining in cypress', () => {
    let accessToken;
    let baseUrl = "https://simple-books-api.glitch.me";
    let bookOrderId;
    it('Post-Call to get access token', () => {
        cy.request(
            {
                method: 'POST',
                url: `${baseUrl}/api-clients/`,
                body: {
                    "clientName": "Test",
                    "clientEmail": `testUser${Math.random() * 100}@gmail.com`
                },
                headers: {
                    'Content-Type': 'application/json'

                }
            }
        )
            .then((response) => {
                expect(response.status).to.equal(201);
                accessToken = response.body.accessToken
                cy.log("Access token is:" + accessToken)
            })
    });

    it('Post-Call Submit Book Order', () => {
        cy.request(
            {
                method: 'POST',
                url: `${baseUrl}/orders/`,
                body: {
                    "bookId": "5",
                    "customerName": "Akshay"
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }

            }
        )
            .then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body.created).to.equal(true);
                bookOrderId = response.body.orderId;
                cy.log('Ordered Book Id is:' + bookOrderId)
            })
    });

    it('Get-Call Get the details of oredred book', () => {
        cy.request(
            {
                method: 'GET',
                url: `${baseUrl}/orders/${bookOrderId}`,
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }

            }
        )
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.id).to.equal(bookOrderId);
                expect(response.body.bookId).to.equal(5);
                expect(response.body.customerName).to.equal('Akshay');
            })
    })
})