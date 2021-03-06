const Intern = require('../lib/intern');

const internTest = new Intern('tom', 123, 'tomemail', 'gwu');

test('constructor', () => {
    expect(internTest.name).toBe('tom');
    expect(internTest.id).toBe(123);
    expect(internTest.email).toBe('tomemail');
    expect(internTest.school).toBe('gwu');
});

test('returns the name property of the object', () => {
    expect(internTest.getName()).toBe('tom');
});

test('returns the id property of the object', () => {
    expect(internTest.getId()).toBe(123);
});

test('returns the email property of the object', () => {
    expect(internTest.getEmail()).toBe('tomemail');
});

test('returns the school property of the object', () => {
    expect(internTest.getSchool()).toBe('gwu');
});

test('returns intern string', () => {
    expect(internTest.getRole()).toBe('Intern');
});