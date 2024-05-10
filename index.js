function analyzeSentence() {
    let sentence = prompt("Enter a sentence ending with a full stop:");
    let lengthOfSentence = 0;  // Counter for the length of the sentence
    let numberOfWords = 0;     // Counter for the number of words
    let numberOfVowels = 0;    // Counter for the number of vowels

    // Define vowels for checking
    const vowels = "aeiouAEIOU";

    // Iterate through each character of the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        // Increment sentence length counter for each character
        lengthOfSentence++;

        // Check for word boundary (space followed by a non-space character)
        if (char === ' ' && i > 0 && sentence[i - 1] !== ' ') {
            numberOfWords++;
        }

        // Check for vowels
        if (vowels.includes(char)) {
            numberOfVowels++;
        }
    }

    // Increment word count by 1 to account for the last word after the final space
    numberOfWords++;

    // Output results using console.log
    console.log(`Length of the sentence (including spaces and the point): ${lengthOfSentence}`);
    console.log(`Number of words: ${numberOfWords}`);
    console.log(`Number of vowels: ${numberOfVowels}`);
}

// Call the function to run the analysis
analyzeSentence();