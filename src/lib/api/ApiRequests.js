
export const apiRequests = {
    GET: async (url)=>{
        const response = await fetch(url)
        return response.json()
    },
    POST: async (url, data)=>{
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        return response.json()
    },
    PATCH: async (url, data, id)=>{
        const response = await fetch(url/id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        return response.json()
    },
    DELETE: async (url, id)=>{
        const response = await fetch(url/id, {
            method: 'DELETE',
        })
        return response.json()
    },
}