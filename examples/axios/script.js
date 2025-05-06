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

        console.log(result);
        console.log('Access Token:', result.data.access);

        return result.data.access


    } catch (error) {
        console.log('error login');


    }
}

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
            baseURL: API_HOST,
        });
        return result.data

    } catch (error) {

    }

}
// 
async function createAuctionAdmin(accessToken) {
    try {
        const formData = new FormData();
        formData.append('name', 'car');
        formData.append('initial_price', 10000);
        formData.append('description', 'New');

        const result = await axios({
            method: 'post',
            url: '/auctions/',
            data: formData,
            headers: {
                'Authorization': `Bearer ${accessToken}`
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
async function startAuction(auctionId, accessToken) {
    try {
        const result = await axios({
            method: 'post',
            url: `/auctions/${auctionId}/start/`,

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

// TODO: fix `socket_id` on the backend and uncomment
// async function auctionsBids(auctionId, accessToken) {
//     try {
//         const result = await axios({
//             method: 'post',
//             url: `/auctions/${auctionId}/bits/`,

//             headers: {
//                 'Authorization': `Bearer ${accessToken}`
//             },
//             baseURL: API_HOST,
//         });
//         console.log(result.data);
//         return result.data

//     } catch (error) {

//     }
// }
async function finishAuction(auctionId, accessToken) {
    try {
        // TODO: should return 200, not 201
        const result = await axios({
            method: 'post',
            url: `/auctions/${auctionId}/finish/`,

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

async function renameAuctionAdmin(auctionId) {
    try {
        const result = await axios({
            method: 'put',
            url: `/auctions/${auctionId}`,
            data: {
                name: 'car',
                initial_price: 10001,
                description: 'New',
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`
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

//
async function main() {

    // TODO: fix register flow and uncomment
    // const newUser = await registerUser()
    // const newUserToken = await loginUser(newUser.email, newUser.password)

    const adminToken = await loginUser('y.korniakov@gmail.com', '1234');

    await getAuctionsList();
    const newCreateAuctionsAdmin = await createAuctionAdmin(adminToken)
    await renameAuctionAdmin(newCreateAuctionsAdmin.id, adminToken)
    await getAuctionById(newCreateAuctionsAdmin.id, adminToken);
    await startAuction(newCreateAuctionsAdmin.id, adminToken)
    await finishAuction(newCreateAuctionsAdmin.id, adminToken)

}

async function mainWithAsync() {
    try {
        const adminToken = await loginUser('y.korniakov@gmail.com', '1234');
        const auction = await createAuctionAdmin(adminToken);

        console.log(auction);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Finally');
    }
}

function mainWithPromises() {
    return loginUser('y.korniakov@gmail.com', '1234')
        .then(adminToken => createAuctionAdmin(adminToken))
        .then(auction => console.log(auction))
        .catch(error => console.log(error))
        .finally(() => console.log('Finally'));
}

main();