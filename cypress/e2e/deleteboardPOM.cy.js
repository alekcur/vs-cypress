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

    it.only("delete board", () => {
        cy.get(".vs-c-img--avatar").eq(1).click();
        cy.get(".vs-l-project__menu").find("ul > li").last().click();
        cy.wait(3000)
        cy.contains("Delete").click()        
    })

});