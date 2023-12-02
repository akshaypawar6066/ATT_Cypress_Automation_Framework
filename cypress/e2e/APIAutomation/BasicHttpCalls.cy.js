describe('Handling HTTP Calls', () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    // const baseUrl=Cypress.env('baseUrl');
    it('HTTP GET Call', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/posts`
        }).then((response) => {
            cy.log('Response is:', response.body)
            expect(response.status).to.eq(200);
            expect(response.body[0].title).to.include('sunt aut facere');
            cy.log('Titile from first id is:' + response.body[0].title)
        })
    });

    it('HTTP Post call', () => {
        cy.request(
            {
                method: 'POST',
                url: `${baseUrl}/posts`,
                body: {
                    "title": "This is my test report",
                    "body": "This is Post call_ATT",
                    "userId": 20
                },
                headers : {
                    'Content-Type': 'application/json'
                }

            }
        )
        .then((response) => 
        {
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');
            expect(response.body.userId).to.equal(20); 
        })
    });

    it('HTTP Put call', () => {
        cy.request(
            {
                method: 'PUT',
                url: `${baseUrl}/posts/1`,
                body: {
                    "title": "This is my test report-UpdatedOne",
                    "body": "This is Post call_ATT-UpdatedOne",
                    "userId": 20
                },
                headers : {
                    'Content-Type': 'application/json'
                }

            }
        )
        .then((response) => 
        {
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
            expect(response.body.userId).to.equal(20); 
            expect(response.body.title).to.equal('This is my test report-UpdatedOne');
            expect(response.body.body).to.equal('This is Post call_ATT-UpdatedOne');

        })
    });

 it('HTTP Delete call', ()=>
 {
    cy.request(
        {
            method: 'DELETE',
            url:`${baseUrl}/posts/1`,
        }
    )
    .then((response)=>
    {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');
    })
 })

})