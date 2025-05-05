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
        if (Math.random() > 0.5) {
            throw new Error('This is an error');
        }

        const { data: token } = await axios.get('https://api.example.com/login');

        const { data: users } = await axios.get('https://api.example.com/users', {
            headers: { Authorization: `Bearer ${token}` },
        });

        return users;
    } catch (error) {
        console.error('Error fetching data:', error);

        return error;
    }
}
