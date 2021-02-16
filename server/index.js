const express = require('express')
const http = require('http')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const Server = http.createServer(app)
const moment = require('moment')
const {addUser, getMessageInClass, getUserInClass, createMessages, getUser,messages,removeUser} = require('./users')

const io = require('socket.io')(Server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {


    const current_id = socket.id

    socket.on('join', ({path,name}) => {

        if (getMessageInClass(path) === undefined) {
            createMessages(path)
        }


         const {people} = addUser({id:current_id,name, path})

       if(people){
           socket.join(path)

           io.to(path).emit('roomData', {
               room: people.room,
               users: getUserInClass(path),
               messages: getMessageInClass(path),
           })
       }

       
    })

    socket.on('sendMessage', (message,time,isAnnouncement, callback) => {

        const people = getUser(socket.id)

        getMessageInClass(people.path).push({
            sender: people.name,
            date: '',
            time,
          message,
          isAnnouncement
        })

    
        io.to(people.path).emit('message', {
            sender: people.name,
            date: '',
            time,
            message,
            isAnnouncement
        })
        callback()
    })

    socket.on('disconnect', () => {

        const people = getUser(socket.id)

        if(people){
            removeUser(socket.id)
          if(getUserInClass(people.path).length == 0){
            
            delete messages[people.path];
           
          }

            console.log(getUserInClass(people.path).length)

         
            const message = people.name + ' Left The Class'
            const time =  moment().format('h:mm a')

            io.to(people.path).emit('message', {
                sender: people.name,
                date: '',
                time,
                message,
                isAnnouncement: true
            })
        }
  
       
    })

    // console.log(current_path)
    //this if for the video

    // socket.emit('yourID',socket.id);
    //
    // io.to(current_path).emit('allUsers', getUserInClass(current_path))
    //
    //
    // socket.on("callUser", (data) => {
    //     io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
    // })
    //
    // socket.on("acceptCall", (data) => {
    //     io.to(data.to).emit('callAccepted', data.signal);
    // })
    //
    // socket.on('join', () => {
    //     console.log('joining');
    //     socket.emit('message',  { messages: 'kurt' })
    //
    // })
    //
    // socket.on('sendMessage', (message) => {
    //     console.log(message);
    //
    //     io.emit('message', message)
    // })
    //
    //
    // socket.on('video', (video) => {
    //     console.log(video);
    // })


  
})


Server.listen(PORT, () => console.log(`Server is starting ${PORT}`))



