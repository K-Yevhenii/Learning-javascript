const API_HOST = "http://localhost:8000/"


// TODO: pass email and password as params
async function loginUser(email, password) {
    try {
        const result = await axios({
            method: 'post',
            url: '/users/login/',
            data: {
                email: email,
                password: password,
            },
            baseURL: API_HOST,
        });
        accessToken = result.data.access;
        refreshToken = result.data.refresh;

        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);

        console.log(result);

        return {
            accessToken: result.data.access,
            refreshToken: result.data.refresh,
        };

    } catch (error) {
        console.log('error login');


    }
}

// TODO: pass value for params as function parameter in order to use like this:
// async function main () {
//     await getAuctionsList({ status: 'active' })
//     await getAuctionsList({ start_from: '2024-09-30T18:18:25.676Z' })
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

        return result.data

    } catch (error) {
        console.log('error');


    }
}
const AUCTIONS_ID = 2
// TODO: pass auctionId as function param and accessToken
// TODO: getAuctionById
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
    const result = await loginUser();
    await getAuctionsList();
    await getById(AUCTIONS_ID, result.accessToken);
}

main()