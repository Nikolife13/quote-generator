let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes); // Verify data in console
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();