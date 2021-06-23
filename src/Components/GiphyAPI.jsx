const host = 'https://api.giphy.com/v1/gifs/search'

async function processResponse(response) {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]).then(res => ({
        statusCode: res[0],
        data: res[1]
    }));
}
export const SearchGIF = async (search) => {
    return fetch(`${host}?q=${search}&limit=10&api_key=uNIcWSlCML657pnj8tW6EFhQJuksdW3j&fmt=json`, {})
        .then(processResponse).catch(err => console.log(err))
}