import axios from 'axios'

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers:{ Authorization: 'Client-ID 6CrhtPaDFbAK7jZWzOlVNAqyT9g7bgoxrJ7SCbWQUFE' }
    

})