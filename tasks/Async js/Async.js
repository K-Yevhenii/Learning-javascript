const API_HOST = "http://localhost:8000/"

let accessToken;
let refreshToken;

async function loginUser() {
    try {
        const result = await axios({
            method: 'post',
            url: '/users/login/',
            data: {
                "email": "y.korniakov@gmail.com",
                "password": "1234"

            },
            baseURL: API_HOST,
        });
        accessToken = result.data.access;
        refreshToken = result.data.refresh;

        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);

        console.log(result);
        return { accessToken, refreshToken }

    } catch (error) {
        console.log('error login');


    }
}

// async function token() {
//     try {
//         const result = await ({
//             method: 'post',
//             url: '/users/login/',
//             data: {
//                 access: 'token',
//                 refresh: 'token',
//             },
//             baseURL: API_HOST,
//         });
//         console.log(data);
//         return result.data;
//     } catch (error) {
//         console.log('error token');
//     }
// }

async function getAuctionsList() {
    try {
        const result = await axios({
            method: 'get',
            url: '/auctions/',
            params: {
                status: 'active',

            },
            baseURL: API_HOST,
        });
        console.log(result);
        console.log('Auctions list');

    } catch (error) {
        console.log('error');


    }
}
const AUCTIONS_ID = 2
async function getById() {

    console.log(' Fet By Id');

    try {
        const result = await axios({
            method: 'get',
            url: `/auctions/${AUCTIONS_ID}`,

            // params: { status: 'active' },
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            baseURL: API_HOST,
        });
        console.log(result.data);
        return result.data

    } catch (error) {

    }
}

async function main() {
    await loginUser()
    await getAuctionsList()
    // await token(loginUser)
    await getById()
}
main()