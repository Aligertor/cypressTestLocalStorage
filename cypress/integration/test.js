/*globals cy*/

describe("Hello Cypress", () => {

    describe("thats how the test website works", () => {

        it("it does not set the local storage if we want", () => {
            expect(localStorage.getItem("test")).to.be.null;
            cy.visit("/");

            cy.wait(900).then(() => {
                expect(localStorage.getItem("test")).to.be.null;
            });
            cy.wait(200).then(() => {
                expect(localStorage.getItem("test")).to.be.null;
            });
        });

        // this test does not disturb later tests
        // since we waited until the async function resolved
        it("it sets the local storage if we want", () => {
            expect(localStorage.getItem("test")).to.be.null;
            cy.visit("/?storage=true");
            // our website writes into the local storage after 1 second
            // thefore it the local storage is empty after 900ms
            cy.wait(900).then(() => {
                expect(localStorage.getItem("test")).to.be.null;
            });
            // 200ms later we have our expected localStorage value
            cy.wait(200).then(() => {
                expect(localStorage.getItem("test")).to.eq("im_here");
            });
        });
    })

    describe("if we have a test that finished before all asyc functions finished", () => {

        it("skip or move be to the end of the describe block or the next test fails", () => {
            cy.visit("/?storage=true");
        });

        it("the instance of the previous test cannot write into the localStorage after clearing it", () => {
            // we do something that forces us to wait until the async function finished and wrote into the localStorage
            // do some API calls for example
            cy.wait(1100);

            // then we start our test
            cy.visit("/");
            cy.wait(100).then(() => {
                expect(localStorage.getItem("test")).to.be.null;
            });
        });
    });

});
