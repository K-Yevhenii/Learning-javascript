const API_HOST = "http://localhost:8000/"

// - Register a user
// - Create an auction as admin
// - Change auction name as admin
// - Start auction as admin
// - Retrieve single auction as user
// - Make an auction bid as user
// - Finish auction as admin
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
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);

        console.log(result);

        return result.data.access



    } catch (error) {
        console.log('error login');


    }
}

// TODO: pass value for params as function parameter in order to use like this:
// async function main () {
//     await getAuctionsList({ status: 'active' })
//     await getAuctionsList({ start_from: '2024-09-30T18:18:25.676Z' })
// }

// async function AuctionsOptionFilter() {
//     console.log('Auctions Option Filter');

//     try {
//         const result = await axios({
//             method: 'pul',
//             url: '/auctions/',
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`
//             },
//             data: {

//                 status: 'not_conducted'
//             }
//         });
//         return result.data;
//     } catch (error) {

//     }
// }
// const optionFilter = AuctionsOptionFilter();


async function getAuctionsList(params) {
    console.log('Auctions list');
    try {
        const result = await axios({
            method: 'get',
            url: '/auctions/',
            params: params,
            baseURL: API_HOST,
        });
        console.log(result);
        console.log('Auctions list');

        return result.data


    } catch (error) {
        console.log('error');


    }
}
const AUCTIONS_ID = '4'
// TODO: pass auctionId as function param and accessToken
// TODO: getAuctionById
async function getAuctionById(auctionId, accessToken) {

    console.log('Fet By Id');

    try {
        const result = await axios({
            method: 'get',
            url: `/auctions/${auctionId}`,

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

async function registerUser() {
    try {
        const formData = new FormData();
        formData.append('first_name', 'yarniakov');
        formData.append('last_name', 'koniakov');
        formData.append('email', 'ya.korniakov@gmail.com');
        formData.append('password', '12345');


        const result = await axios({
            method: 'post',
            url: '/users/register/',
            data: formData,
        });
        return result.data

    } catch (error) {

    }

}
// 
async function createAuctionAdmin() {
    try {
        const result = await axios({
            method: 'post',
            url: '/auctions/',
            data: {
                name: 'car',
                initial_price: 10000,
                description: 'New',
            }
            baseURL: API_HOST,
        });
        console.log(result);
        console.log('Auctions list');

        return result.data


    } catch (error) {
        console.log('error');


    }
}

// 
async function main() {
    const newUser = await registerUser()
    const newUserToken = await loginUser(newUser.email, newUser.password)
    const adminToken = await loginUser('y.korniakov@gmail.com', '1234');
    await getAuctionsList();
    await getAuctionById(AUCTIONS_ID, result.accessToken);
    await getAuctionById(5, result.accessToken);
    await getAuctionById(6, result.accessToken);
}

main()