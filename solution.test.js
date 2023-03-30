const { describe } = require('node:test')
const {Haiku, syllablesCounter} = require('./solution')

describe('Syllables counter', ()=>{
    test('should correctly count syllables in a word', () => {
        expect(syllablesCounter('swole')).toBe(2);
        expect(syllablesCounter('fit')).toBe(1);
        expect(syllablesCounter('fitness')).toBe(2);
        expect(syllablesCounter('gains')).toBe(1);
    });
    test('should return 0 for an empty string', () => {
        expect(syllablesCounter('')).toBe(0);
    });
    test('should return 1 for a word with 3 or fewer characters', () => {
        expect(syllablesCounter('cat')).toBe(1);
    });
});