class AddBoard {

    get addBoard() {
        return cy.get("vs-c-organization-boards__item--add-new").click();
            
    }

}

export const addBoard = new AddBoard();