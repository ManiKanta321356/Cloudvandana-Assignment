function reverseWords(sentence) {
    // Split the sentence into words
    var words = sentence.split(' ');

    // Reverse each word and store them in an array
    var reversedWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    var reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage:
var inputSentence = "This ia sunny day";
var reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); //output: sihT ai ynnus yad
