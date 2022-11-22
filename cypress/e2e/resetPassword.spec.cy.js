describe('Testing reset password page', () => {
  it('Opens reset password page', () => {
    cy.visit('http://localhost:3000')
  })

  it('Old Password required', () => {
    cy.visit('http://localhost:3000')
    cy.get('#oldPassword').within(() => {
      cy.get('input').focus().then((e) => {
        e.blur();
      })

      cy.get('input').should('have.class', 'is-invalid')
      cy.contains('Password can not be blank')
    })
  })

  it('New Password Validates Correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#newPassword').within(() => {
      const input = cy.get('input')
      input.focus().type('abc').blur()
      input.should('have.class', 'is-invalid')
      cy.contains('Password must be 8 or more characters and a mixture of numbers and letters')
      input.clear()

      input.focus().type('abcedfghi').blur()
      input.should('have.class', 'is-invalid')
      cy.contains('Password must be 8 or more characters and a mixture of numbers and letters')
      input.clear()

      input.focus().type('123456789').blur()
      input.should('have.class', 'is-invalid')
      cy.contains('Password must be 8 or more characters and a mixture of numbers and letters')
      input.clear()
    })
  })

  it('Confirm Password Validates Correctly', () => {
    cy.visit('http://localhost:3000')

    cy.get('#confirmPassword').within(() => {
      const input = cy.get('input')
      input.focus().type('abc').blur()
      input.should('have.class', 'is-invalid')
      cy.contains('Password must be 8 or more characters and a mixture of numbers and letters')
      input.clear()

      input.focus().type('abcedfghi').blur()
      input.should('have.class', 'is-invalid')
      cy.contains('Password must be 8 or more characters and a mixture of numbers and letters')
      input.clear()

      input.focus().type('123456789').blur()
      input.should('have.class', 'is-invalid')
      cy.contains('Password must be 8 or more characters and a mixture of numbers and letters')
      input.clear()
    })

    cy.get('#newPassword').within(() => {
      cy.get('input').type('abc12345')
    })

    cy.get('#confirmPassword').within(() => {
      cy.get('input').type('abc12346')
      cy.get('input').blur()
      cy.get('input').should('have.class', 'is-invalid')
      cy.contains('Passwords do not match')
    })

    cy.get('#newPassword').within(() => {
      cy.get('input').should('have.class', 'is-invalid')
    })
  })

  it('Happy flow', () => {
    cy.visit('http://localhost:3000')


    cy.get('#oldPassword').within(() => {
      cy.get('input').type('abc12346')
    })

    cy.get('#newPassword').within(() => {
      cy.get('input').type('abc12346')
    })

    cy.get('#confirmPassword').within(() => {
      cy.get('input').type('abc12346')
      cy.get('input').blur()
    })

    cy.get('#passwordResetConfirm').should('not.be.disabled');
  })
})