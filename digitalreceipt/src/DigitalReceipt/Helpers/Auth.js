
import {TestUser} from './Variables'

function getAuth(email, password){
console.log('Here: ', email, password)
    return (email === TestUser.email && password === TestUser.password)
        
}

export default getAuth;