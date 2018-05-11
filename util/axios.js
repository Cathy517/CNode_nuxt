const axios = require('axios')
const qs = require('qs')
axios.defaults.baseURL = "https://cnodejs.org/api/v1"

export var axiosRq = async(type = 'POST', url = '', data = {}) => {
    let result
    type = type.toUpperCase()
    if (type === 'GET') {
        await axios.get(url, { params: data })
            .then(res => {
                result = res.data
            })
    } else if (type === 'POST') {
        await axios.post(url, qs.stringify(data))
            .then(res => {
                result = res.data
            })
    }
    return result
}