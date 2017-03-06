import axios from 'axios'

// api 路径
const HttpUrl = ''

export function fetch(api, method = 'GET') {
    return new Promise((resolve, reject) => {
        // axios.get(HOST + url)
        //     .then(response => {
        //       resolve(response.data);
        //     })
        //     .catch((error) => {
        //        reject(error)
        //     })
        axios({
                method: method,
                url: HttpUrl + api,
                //params:params
            })
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {

    /**
     * 
     * @param {any} accesstoken 
     * @returns
     */
    Login(accesstoken) {
        return fetch(`/accesstoken?accesstoken=${accesstoken}`, 'post')
    },

    /**
     * 
     * @param {any} params
     * @returns
     */
    FindList(params) {
        return fetch(`/topics/${params}`)
    },

    /**
     * 
     * @param {any} id 参数id
     * @returns
     */
    FindDesc(id) {
        return fetch(`/topic/${id}`)
    },

    /**topics 
     * 
     * @param {any} accesstoken 
     * @returns
     */
    Messages(accesstoken) {
        return fetch(`/messages?mdrender=true&accesstoken=${accesstoken}`)
    },


    /**
     * 
     * @param {any} form
     * @returns
     */
    Post(form) {
        return fetch(`/topics?${form}`, 'post')
    }

}