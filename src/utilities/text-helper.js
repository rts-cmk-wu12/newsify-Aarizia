class TextHelper {

    static truncate(sentence, maxLetters = 30) {

        const splitSentence = sentence.split('');
        const shortenedSplitSentence = splitSentence.slice(0, maxLetters);
        const shortenedSentence = shortenedSplitSentence.join('');
        const shortenedSentenceAndDots = shortenedSentence + '...';

        return shortenedSentenceAndDots;
    }
}

module.exports = TextHelper;