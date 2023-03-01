describe("Password Change Form", () => {
  it("renders correctly", () => {
    cy.visit("http://localhost:3000/?");
  });

  it("checks for a minimum of 8 characters with a mix of number and letters", () => {
    cy.visit("http://localhost:3000/?");
    cy.get("input.form-control#oldpassword").type("someoldpassword");
    cy.get("input.form-control#newpassword").type("somepas");
    cy.get("input.form-control#confirmpassword").type("somepas");
    cy.get("button#changepassword").click();
    cy.get(".error").should(
      "have.text",
      "Password must contain a min of 8 characters and a mixture of numbers and letters"
    );
  });

  it("reset the input field when canceled", () => {
    cy.visit("http://localhost:3000/?");
    cy.get("input.form-control#oldpassword").type("someoldpassword");
    cy.get("input.form-control#newpassword").type("somepassword");
    cy.get("input.form-control#confirmpassword").type("somepassowrd");
    cy.get("button#cancel").click();
    cy.get("input.form-control#oldpassword").should("have.text", "");
    cy.get("input.form-control#newpassword").should("have.text", "");
    cy.get("input.form-control#confirmpassword").should("have.text", "");
  });

  it("allows users to change their password", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);
    cy.visit("http://localhost:3000/?");
    cy.get("input.form-control#oldpassword").type("someoldpassword");
    cy.get("input.form-control#newpassword").type("somepassword1");
    cy.get("input.form-control#confirmpassword").type("somepassword1");
    cy.get("button#changepassword")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("sucess!");
      });
  });
});
