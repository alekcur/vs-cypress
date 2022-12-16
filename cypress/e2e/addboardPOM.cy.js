/// <reference types="Cypress"/>
import { loginPage } from "../page_objects/loginPOM";

import { addBoard } from "../page_objects/addboardPOM";

describe("login test", () => {
    beforeEach("visit vivifyscrum app", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/");
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/login"
        ).as("successfullLogin");

        loginPage.login(Cypress.env("userEmail"), Cypress.env("userPass"));
        cy.wait("@successfullLogin").then(interception => {
            console.log("INTERCEPTION", interception);
            expect(interception.response.statusCode).eq(200);
        });
        cy.url().should("not.include", "/login");
    });


    it.only("create new board", () => {
    let name = "QA_1";  
        cy.get(".vs-c-my-organization__board").first().click();
        cy.get("input[type = 'text']").last().type(name)
        cy.get('[name="next_btn"]').click();
        cy.get(".vs-c-radio-check").last().click();
        cy.get('[name="next_btn"]').click();
        cy.get('[name="next_btn"]').click();
        cy.get('[name="next_btn"]').click();
    });

});