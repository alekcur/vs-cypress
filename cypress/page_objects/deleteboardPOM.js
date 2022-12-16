class DeleteBoard {

    get deleteBoard() {
        return cy.get(".vs-l-project__menu").click();
            
    }

}

export const deleteBoard = new DeleteBoard();