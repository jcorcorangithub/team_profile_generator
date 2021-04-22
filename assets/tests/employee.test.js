const Employee = require('../lib/employee');

const employeeTest = new Employee('jim', 281, 'jpc@email');

test('constructor', () => {
    expect(employeeTest.name).toBe('jim');
    expect(employeeTest.id).toBe(281);
    expect(employeeTest.email).toBe('jpc@email');
});

test('returns the name property of the object', () => {
    expect(employeeTest.getName()).toBe('jim');
});

test('returns the id property of the object', () => {
    expect(employeeTest.getId()).toBe(281);
});

test('returns the email property of the object', () => {
    expect( employeeTest.getEmail()).toBe('jpc@email');
});

// test('returns ___________', () => {
//     expect( employeeTest.getRole()).toBe('jim');
// });

