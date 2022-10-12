const operations  = require('./operations.js')

describe("Addition", ()=>{
//Arrange
const addition = new operations()

    test('sum must be 25 ' ,() =>{        
      //Assert
        expect(addition.add(10,15)).toBe(25)
    })
    test('is sum 2' ,() =>{        
        //Assert
        expect(addition.add(1,1)).toBe(2)
    })
    test('is sum 7' ,() =>{        
        //Assert
        expect(addition.add(1,6)).toBe(7)
    })
})


describe("Substract", ()=>{

         const substract = new operations()

        test('substrac 15 - 5 must be 5' ,() =>{        
            expect(substract.substract(15,10)).toBe(5)
        })
        test('substrac 1 - 1 must be 0' ,() =>{        
            expect(substract.substract(1,1)).toBe(0)
        })
        test('substrac 8 - 6 must be 2' ,() =>{        
            expect(substract.substract(8,6)).toBe(2)
        })
    })


    describe("Divide", ()=>{

        const divide = new operations()

       test('didive 15 - 5 must be 3' ,() =>{        
           expect(divide.divide(15,5)).toBe(3)
       })
       test('substrac 1 - 1 must be 1' ,() =>{        
           expect(divide.divide(1,1)).toBe(1)
       })
       test('substrac 20 - 5 must be 4' ,() =>{        
           expect(divide.divide(20,5)).toBe(4)
       })
   })


   describe("Multiply", ()=>{

    const multiply = new operations()

   test('multiply 15 * 5 must be 75' ,() =>{        
       expect(multiply.multiply(15,5)).toBe(75)
   })
   test('multiply 1 * 1 must be 1' ,() =>{        
       expect(multiply.multiply(1,1)).toBe(1)
   })
   test('multiply 20 * 5 must be 100' ,() =>{        
       expect(multiply.multiply(20,5)).toBe(100)
   })
})














