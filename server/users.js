let users = []
// messages format
// 'asldjfhasjkdf':[
//     {'from':'kurt', 'date': '', 'time':'', 'message': 'wew',}
// ],
let messages = {}
const addUser = ({id,name, path}) => {

    // const existingUser = users.find((user) =>  user.room === room && user.name === name);
    //
    // if(existingUser){
    //     return {error: 'Username is taken'}
    // }


    const find = users.find((user) =>user.id === id)

    if(!find){
        const people = {id,name,path}


        users.push(people)

        return {people}
    }

    return false
}

const getUserInClass = (path) => users.filter((user) => {

    return user.path === path
})


const getMessageInClass = (path) => messages[path];

const createMessages = (path) => messages[path] = [];

const getUser = (id) => users.find((user) => user.id === id)

const removeUser = (id) => {
    users = users.filter((user) => user.id !== id)
    return users
}

module.exports = {addUser, getUserInClass, getMessageInClass, createMessages,getUser,messages,removeUser}