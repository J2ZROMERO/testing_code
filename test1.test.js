const stringLength = require('./test1');

test ('the string has 9 characters', () => {
   //Assert
    expect (stringLength('abcdefghi')).toBe(9)
});

test ('The string has too many characters', () => {
    //Assert
    expect(() => stringLength('abcdefghijklmn').toThrow(Error));
})

test ('The string has too many characters', () => {
    //Assert
    expect(() => stringLength('')).toThrow(Error);
})
