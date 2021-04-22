const Engineer = require('../lib/engineer');

const engineerTest = new Engineer('james', 555, 'jamesemail', 'jcorcorangit');

test('constructor', () => {
    expect(engineerTest.name).toBe('james');
    expect(engineerTest.id).toBe(555);
    expect(engineerTest.email).toBe('jamesemail');
    expect(engineerTest.github).toBe('jcorcorangit');
    expect(engineerTest.title).toBe('Engineer');
});

test('returns the name property of the object', () => {
    expect(engineerTest.getName()).toBe('james');
});

test('returns the id property of the object', () => {
    expect(engineerTest.getId()).toBe(555);
});

test('returns the email property of the object', () => {
    expect(engineerTest.getEmail()).toBe('jamesemail');
});

test('returns the github property of the object', () => {
    expect(engineerTest.getGithub()).toBe('jcorcorangit');
});

// test('returns ___________', () => {
//     expect(engineerTest.getRole()).toBe();
// });