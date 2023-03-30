import unittest
from solution import haiku, syllables_counter

with open("words.txt", "r") as f:
    file = f.read().splitlines()

class TestSyllablesCounter(unittest.TestCase):
    def test_syllables_count(self):
        self.assertEqual(syllables_counter("smile"), 1)
        self.assertEqual(syllables_counter("fit"), 1)
        self.assertEqual(syllables_counter("exercising"), 3)
        
    def test_empty_string_or_not_a_string(self):
        self.assertEqual(syllables_counter(""), 0)
        self.assertEqual(syllables_counter(5), 0)
        self.assertEqual(syllables_counter(None), 0)
        self.assertEqual(syllables_counter([]), 0)
        self.assertEqual(syllables_counter(), 0)

    def test_word_with_3_or_fewer_characters(self):
        self.assertEqual(syllables_counter("cat"), 1)

class TestHaiku(unittest.TestCase):
    def test_follows_5_7_5_rule(self):
        result = haiku(file)
        def syllables_total(sentence):
            total = 0
            words = sentence.split()
            for word in words:
                total += syllables_counter(word)
            return total
        self.assertEqual(syllables_total(result[0]), 5)
        self.assertEqual(syllables_total(result[1]), 7)
        self.assertEqual(syllables_total(result[2]), 5)
        
    def test_no_word_duplicated(self):
        result = haiku(file)
        separated_words = ' '.join(result).split()
        self.assertEqual(len(set(separated_words)), len(separated_words))

    def test_returns_only_letters(self):
        list_with_numbers = [word + str(i) for i, word in enumerate(file)]
        result = haiku(list_with_numbers)
        words = ' '.join(result).split()
        contains_numbers = any(c.isdigit() for w in words for c in w)
        self.assertFalse(contains_numbers)
        
    def test_returns_empty_array_when_passed_invalid_input(self):
        result = haiku(None)
        self.assertEqual(result, [])

if __name__ == '__main__':
    unittest.main()