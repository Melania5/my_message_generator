//array of inspirational quotes
const inspirationalQuotes = ["Start by doing what's necessary, then do what's possible; and suddenly you are doing the impossible.", "Every situation in life is temporary.", "Every day may not be good, but there is something good in every day."];
 
//array of motivational quotes
const motivationalQuotes = ["Be the change that you wish to see in the world.", "It's never too late for a new beginning in your life.", "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."];
 
//array of manifesting quotes
const manifestingQuotes = ["Ask for what you want and be prepared to get it.", "What you think, you create. What you feel, you attract. What you imagine, you become.", "Thoughts become things. If you see it in your mind, you will hold it in your hand."];

//create function to randomize quotes
const getRandomQuote = () => {
    const randQuote = (array) => {
        return Math.floor(Math.random() * array.length);
    };

    let inspiring =inspirationalQuotes[randQuote(inspirationalQuotes)];
 
    let motivational = motivationalQuotes[randQuote(motivationalQuotes)];
 
    let manifesting = manifestingQuotes[randQuote(manifestingQuotes)];

    const intro = "Hello! Are you looking to create a deeper connection with yourself and strengthen your bond with the infinite universe?";
    console.log(intro);
 
    const outputQuote = `\n If so, you are in the right place! Here are some deep meaningful quotes that might just spark some motivation within you and help you reach your wanted destination in your self discovery journey.
    \n\n Today's inspiring quote is: ${inspiring} \n\nThe motivational quote is: ${motivational} \n\nand the manifesting quote is: ${manifesting}`;
        console.log(outputQuote);
    
};

console.log(getRandomQuote());
