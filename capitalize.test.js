const str = require('./capitalize')


test('capitalize string', ()=>{
//Assert
    expect(str("jose")).toMatch("Jose")
})

