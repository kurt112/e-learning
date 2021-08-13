/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import Peer from 'peerjs'


let myVideoStream;
const peers = {}
const myVideo = document.createElement('video')
myVideo.muted = true

const Participant = ({io, path, visible, classroom}) => {
    const socket = io.socket
    const peerRef = useRef()
    const videoGridRef = useRef()
    const {mic, video} = classroom
    console.log(socket.id)




    useEffect(() => {

        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            myVideoStream = stream;

            addVideoStream(myVideo, stream)

            peerRef.current.on('call', call => {
                call.answer(stream)
                const video = document.createElement('video')
                call.on('stream', userVideoStream => {
                    addVideoStream(video, userVideoStream)
                })
            })

            socket.on('user-connected', userId => {
                connectToNewUser(userId, stream)
            })

        })


        peerRef.current = new Peer()
        peerRef.current.on('open', id => {
            socket.emit('join-video', path, id, () => {
            })
        })

        socket.on('user-connected', (userId) => {
        })

        socket.on('user-diconnected', userId => {
            if (peers[userId]) peers[userId].close()
        })



    }, [])


    useEffect(() => {
        if(myVideoStream !== undefined){
            const enabled = myVideoStream.getVideoTracks()[0].enabled;
            if (enabled) {
                myVideoStream.getVideoTracks()[0].enabled = false;
            } else {
                myVideoStream.getVideoTracks()[0].enabled = true;
            }
        }
    },[video])

    useEffect(()=> {;
        if(myVideoStream !==undefined){
            const enabled = myVideoStream.getAudioTracks()[0].enabled
            if (enabled) {
                myVideoStream.getAudioTracks()[0].enabled = false;
            } else {
                myVideoStream.getAudioTracks()[0].enabled = true;
            }
        }
    }, [mic])


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