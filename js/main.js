var quote = document.getElementById('quote');
var author = document.getElementById('author');
var chosenNumber = document.getElementById('chosen_number');

function randomQuote() {
    var randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber === Number(chosenNumber.innerText)) {
        randomNumber += 1;
        override();
    } else {
        override();
    }
    function override() {
        switch (randomNumber) {
            case 0:
                quote.innerText = `“In three words I can sum up everything I've learned about life: it goes on.”`;
                author.innerText = `― Robert Frost`;
                chosenNumber.innerText = `0`;
                break;
            case 1:
                quote.innerText = `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`;
                author.innerText = `― J.K. Rowling`;
                chosenNumber.innerText = `1`;
                break;
            case 2:
                quote.innerText = `“If you tell the truth, you don't have to remember anything.”`;
                author.innerText = `― Mark Twain`;
                chosenNumber.innerText = `2`;
                break;
            case 3:
                quote.innerText = `“To live is the rarest thing in the world. Most people exist, that is all.”`;
                author.innerText = `― Oscar Wilde`;
                chosenNumber.innerText = `3`;
                break;
            case 4:
                quote.innerText = `“Insanity is doing the same thing, over and over again, but expecting different results.”`;
                author.innerText = `― Narcotics Anonymous`;
                chosenNumber.innerText = `4`;
                break;
            case 5:
                quote.innerText = `“It is better to be hated for what you are than to be loved for what you are not.”`;
                author.innerText = `― Andre Gide`;
                chosenNumber.innerText = `5`;
                break;
            case 6:
                quote.innerText = `“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”`;
                author.innerText = `― Jane Austen`;
                chosenNumber.innerText = `6`;
                break;
            case 7:
                quote.innerText = `“We are all in the gutter, but some of us are looking at the stars.”`;
                author.innerText = `― Oscar Wilde`;
                chosenNumber.innerText = `7`;
                break;
            case 8:
                quote.innerText = `“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”`;
                author.innerText = `― Mark Twain`;
                chosenNumber.innerText = `8`;
                break;
            case 9:
                quote.innerText = `“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”`;
                author.innerText = `― Maurice Switzer`;
                chosenNumber.innerText = `9`;
                break;
			default:
				quote.innerText = `“In three words I can sum up everything I've learned about life: it goes on.”`;
                author.innerText = `― Robert Frost`;
                chosenNumber.innerText = `0`;
                break;
        };
    };
};

