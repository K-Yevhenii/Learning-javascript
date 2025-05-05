// Using promises

function makeRequestWithPromises(): Promise<string> {
    return axios
        .get('https://api.example.com/data') // Should return a promise with string
        .then((response) => console.log(response.data))
        .catch((error) => console.error('Error fetching data:', error));
}

// Using async/await

async function makeRequestWithAsyncAwait(): Promise<string> {
    try {
        const response = await axios.get('https://api.example.com/data');

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);

        return error;
    }
}
