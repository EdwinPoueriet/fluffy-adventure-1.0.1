import random, re, pyphen


def haiku(word_list):
    if not is_list_of_strings(word_list):
        return []

    result = ["", "", ""]
    copy = set()

    for index in range(len(result)):
        amount = 7 if index == 1 else 5
        words = []
        while amount > 0:
            current_word = remove_non_letter_characters(word_list[random.randint(0, len(word_list)-1)])
            current_word_syllables = syllables_counter(current_word)

            if current_word_syllables <= amount and current_word not in copy:
                copy.add(current_word)
                words.append(current_word)
                amount -= current_word_syllables

        result[index] = " ".join(words)

    return result


def syllables_counter(word):
    word.lower()
    
    if not isinstance(word, str) or len(word) == 0:
        return 0

    if len(word) <= 3:
        return 1

    syllables = pyphen.Pyphen(lang='en')

    return len(syllables.inserted(word).split("-"))


def is_list_of_strings(word_list):
    if not isinstance(word_list, list) or not word_list:
        return False

    return all(isinstance(word, str) for word in word_list)


def remove_non_letter_characters(word):
    return re.sub(r"[^a-zA-Z ]", "", word).lower()


with open("words.txt", "r") as f:
    file = f.read().splitlines()

print(haiku(file))