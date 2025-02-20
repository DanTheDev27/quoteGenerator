
const api_url = 'https://dummyjson.com/quotes/random';  // Make sure the URL is correctly formatted

let button = document.getElementById('btn');
button.addEventListener('click', function() {
  getapi(api_url)
})

async function getapi(url) {
  try {
    const response = await fetch(url);  // Fetch the data from the API
    if (!response.ok) {  // Check if the response is successful (status 200-299)
      throw new Error('Network response was not ok');
    }
    console.log(response.status); // http status code
    function fixCapitalization(sentence) {
      return sentence
          .split(' ')               // Split the sentence into words
          .map(word =>              // Iterate over each word
              word.toLowerCase()    // Convert the word to lowercase
                  .replace(/^\w/, (c) => c.toUpperCase())  // Capitalize the first letter
          )
          .join(' ');               // Join the words back into a sentence
  }
    const data = await response.json();  // Parse the JSON from the response
    console.log(data);  // Log the data to the console
    let quote = data.quote;
    let author = data.author;

    let fixedQuote = fixCapitalization(quote);
    document.getElementById('quote').innerText = `"${fixedQuote}"`;
    document.getElementById('author').innerText = `-${author}`;

    

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);  // Log any errors that occurred
  }
}

getapi(api_url);  // Call the function with the correct API URL








