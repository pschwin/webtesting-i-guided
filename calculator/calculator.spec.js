const { add } = require('./calculator.js');

// test away!

it('should add 2 numbers', () =>{
    expect(add(2,2)).toBe(4);
    expect(add(1,2)).toBe(3);
    expect(add(-1,2)).toBe(1);
});

// should return the passed value, if only one value provided
it('should return the passed value, if only one value provided', () =>{
    expect (add(1)).toBe(1);
    expect(add(99)).toBe(99);
})

//should calculate the sum of any number of arguments separated by commas
it('should calculate the sum of any number of arguments separated by commas', () =>{
    expect(add(4,3)).toBe(7);
    expect(add(10,10,10,10)).toBe(40);
})

// Should handle an array of numbers
it('should calculate the sum of any number of arguments in an array', () =>{
    expect(add([4,3])).toBe(7);
    expect(add([10,10,10,10])).toBe(40);
})

it.todo('passing strings')
it.todo('not passing values')
it.todo('passing null or undefined')

//another way
function honest(){
    return true;
}

test('an honest function should tell the truth', () =>{
    expect(honest()).toBeTruthy();
})
//can add 2 and 2
const sum = add(2,2);
console.log(sum);

//test case
// test ('adds 2 and 2', function(){
//     //Arrange
//     const expected = 4;
//     const value1 = 2;
//     const value2 = 2;

//     //Act
//     const sum = add(value1,value2);

//     //Assert
//     expect(sum).toEqual(4);
// })