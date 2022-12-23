// 未授权用户浏览网站简易流程
describe('未登录用户直接访问', () => {
  it('访问资讯', () => {
    cy.viewport('iphone-8')
    cy.visit('/')

    //校园资讯
    cy.get(':nth-child(2) > .flex > div > .el-button > span > .more-text').click()
    cy.get('[style="overflow: hidden;"] > :nth-child(2) > :nth-child(2) > .flex').click()
    cy.get('.news-body > img').should('be.visible')
    cy.get('.v-show-content > p').should('be.visible')
    cy.get('.title').should('be.visible')

  })
  it('影像福大', () => {
    cy.viewport('iphone-8')
    cy.visit('/')
    //影像福大
    cy.get(':nth-child(3) > .flex > div > .el-button').click()
    cy.get(':nth-child(3) > .video').should('be.visible')

  })
  it('校庆活动', () => {
    cy.viewport('iphone-8')
    cy.visit('/')
    cy.get(':nth-child(9) > .flex > div > .el-button').click()
    cy.get('.el-timeline').should('be.visible')
    cy.get('.el-button:nth-child(1)  > span > .icon').should('be.exist')
  
  })
  it('时光长廊', () => {
    cy.viewport('iphone-8')
    cy.visit('/')
    cy.get(':nth-child(11) > .flex > div > .el-button').click()
    cy.get('.el-button:nth-child(1)  > span > .icon').should('be.exist')
    cy.get('a').should('be.exist')
    cy.get('.el-button:nth-child(1)  > span > .icon').first().click()
    cy.get('.el-image__inner').should('be.visible')
    cy.get('.v-show-content').should('be.visible')
  })
  it('校园论坛', () => {
    cy.viewport('iphone-8')
    cy.visit('/')
    cy.get(':nth-child(13) > .flex > div > .el-button').click()
    cy.get(':nth-child(1) > .f-col > h2').click()
    cy.get('.post-title').should('be.visible')
    cy.get('.sticked').should('be.visible')
  })
})
