// 测试从登录到个人界面到退出登录

describe('Log Test ( in & out )', () => {
  it('Login', () => {
    cy.viewport('iphone-8')
    cy.visit('/login')
    cy.get('#email').type("2833275565@qq.com")
    cy.get('#password').type("123456789")
    cy.get('.login > .el-form-item__content > .el-button').click()
  })
  it('Go to personal user page', () => {
    cy.viewport('iphone-8')
    cy.get('.el-sub-menu__title').click()
    cy.get('.el-menu > :nth-child(2)').click()
  })
  it('Logout', () => {
    cy.viewport('iphone-8')
    cy.get('#logout').click()
    cy.get('#logout_btn').click()
  })
})
