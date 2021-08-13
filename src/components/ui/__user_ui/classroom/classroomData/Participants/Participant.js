/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import Peer from 'peerjs'


let participant = this;

const Participant = ({io, path, visible, classroom}) => {
    const socket = io.socket
    const peerRef = useRef()
    const videoGridRef = useRef()
    const myVideo = document.createElement('video')
    const {mic, video} = classroom
    const peers = {}
    myVideo.muted = true
    console.log(socket.id)


    useEffect(() => {

        if (mic || video) {
            navigator.mediaDevices.getUserMedia({
                video: video,
                audio: mic
            }).then(stream => {
                socket.on('refresh',id =>{
                    if(document.getElementById(id))
                        document.getElementById(id).remove()

                })
                addVideoStream(myVideo, stream)
                myVideo.id = socket.id
                peerRef.current.on('call', call => {
                    call.answer(stream)
                    const video = document.createElement('video')
                    call.on('stream', userVideoStream => {
                        addVideoStream(video, userVideoStream)
                    })
                })

                socket.on('user-connected', userId => {
                    peers[userId] =
                    connectToNewUser(userId, stream)
                })

            })


            peerRef.current = new Peer()
            peerRef.current.on('open', id => {
                console.log(id)
                socket.emit('join-video', path, id, () => {
                })
            })

            socket.on('user-connected', (userId) => {
                console.log(userId);
            })

            socket.on('user-diconnected', userId => {
                if (peers[userId]) peers[userId].close()
            })



        }


    }, [])


    const addVideoStream = (video, stream) => {
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
            video.play()
        })


        videoGridRef.current.append(video)
    }


    const connectToNewUser = (userId, stream) => {
        const call = peerRef.current.call(userId, stream)
        const video = document.createElement('video')
        console.log('connecting to new user');
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream)
        })

        call.on('close', () => {
            video.remove()
        })

        peers[userId] = call
    }

    return (
        <div style={visible === false ? {visibility: "hidden", position: 'fixed'} : null} ref={videoGridRef}
             id="video-grid">

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        classroom: state.Classroom,
        io: state.Socket
    }
}

export default connect(mapStateToProps)(Participant)