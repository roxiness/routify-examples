const baseUrl = 'http://localhost:3000/'

export async function api(url, data, method = null) {
    console.log('method', method)
    method = method || data ? 'POST' : 'GET'
    url = baseUrl + url
    const options = { method, credentials: 'include' }
    if (data) {
        options.body = JSON.stringify(data)
        options.headers = { "Content-Type": "application/json" }
    }
    const response = await fetch(url, options);
    return response
}