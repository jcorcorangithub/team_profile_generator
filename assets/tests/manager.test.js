const Manager = require('../lib/manager');

const managerTest = new Manager('ladislav', 882, 'lademail', 663);

test('constructor', () => {
    expect(managerTest.name).toBe('ladislav');
    expect(managerTest.id).toBe(882);
    expect(managerTest.email).toBe('lademail');
    expect(managerTest.officeNumber).toBe(663);
});

test('returns the name property of the object', () => {
    expect(managerTest.getName()).toBe('ladislav');
});

test('returns the id property of the object', () => {
    expect(managerTest.getId()).toBe(882);
});

test('returns the email property of the object', () => {
    expect(managerTest.getEmail()).toBe('lademail');
});

test('returns manager string', () => {
    expect(managerTest.getRole()).toBe('Manager');
});