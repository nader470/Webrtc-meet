/// <reference types="Cypress" />
describe("Text chat", () => {
    const peerId = "qwe";
    const userName = "Cypress";
    it("sends message and displays it in the chat", () => {    
    cy.visit("http://localhost:3000");
    cy.get("input").type("Nader Hadj Salah");
    cy.get("button").click();
    cy.get('[data-testid="chat-button"]').click();
        cy.get("textarea").type("Bonjour à tous!");
        cy.get('[data-testid="send-msg-button"]').click();
        cy.get('[data-testid="chat"]').should("contain.text", "Bonjour à tous!");
        cy.get('[data-testid="chat"]').should("contain.text", "You");
        cy.task("connect");
        cy.url().then((url) => {
            const roomId = url.split("/").reverse()[0];
            cy.task("joinRoom", { roomId, peerId, userName });
            cy.task("emit", {
                event: "send-message",
                roomId,
                eventData: {
                    content: "Hello, Nader!",
                    author: "qwe",
                    timestamp: new Date(),
                },
            });
        });
        cy.get('[data-testid="chat"]').should("contain.text", "Hello, Nader!");
        cy.get('[data-testid="chat"]').should("contain.text", userName);
    });
});
