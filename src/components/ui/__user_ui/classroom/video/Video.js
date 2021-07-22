/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Box} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";
import style from './VideoStyle'
import {connect} from 'react-redux'
import Peer from "simple-peer";

const Video = ({video, mic, socket}) => {
    const classes = style()

    const [yourID, setYourID] = useState("");
    const [users, setUsers] = useState({});
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [peers,setPeers] = useState([])
    const peersRef = useRef([])
    const userVideo = useRef();


    useEffect(() => {
        console.log(socket.id)

        navigator.mediaDevices.getUserMedia({
            audio: mic,
            video: {video, height: '100%', width: '100%'}
        }).then(stream => {
            setStream(stream)
            if (userVideo.current) {
                userVideo.current.srcObject = stream
                socket.emit("join room")
                socket.on("all users", users => {
                    const peers = []
                    users.forEach(userId => {
                        const peer  = createPeer(userId,socket.id,stream)
                        peersRef.current.push({
                            peerID: userId,
                            peer
                        })
                        peers.push(peer)
                    })
                    setPeers(peers)
                })
            }

            socket.on("user joined", payload => {
                const peer = addPeer(payload.signal,payload.callerId, stream)
                peersRef.current.push({
                    peerID: payload.callerId,
                    peer
                })
                setPeers(users => [...users, peer])
            })

            socket.on("Receiving returnd signal", payload => {
                const item  = peersRef.current.find(p => p.peerId === payload.id)

                item.peer.signal(payload.signal)
            })

        })


    }, [mic, video])

    const createPeer = (userToSignal, callerId, stream) =>{
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream
        })


        peer.on("signal", signal => {
            socket.emit("Sending Signal", {userToSignal,callerId,signal})
        })

        return peer
    }

    const addPeer =(incomingSignal, calledID, stream) => {
        const peer = new Peer({
            initiator: false,
            tickle: false,
            stream
        })


        peer.on("signal", signal => {
            socket.emit("returning signal", {signal,calledID})
        })

        peer.signal(incomingSignal)

        return peer
    }

    let UserVideo;

    if (stream) {
        UserVideo = (<video playsInline muted ref={userVideo} autoPlay controls/>)
    }


    return <Box className={classes.leftUp}>
        {UserVideo}

        {/*{PartnerVideo}*/}
        {Object.keys(users).map(key => {
                if (key === yourID) {

                    return null;
                }
                return (
                    <p key={key}>ahksjd</p>
                    // <button key={key} onClick={() => callPeer(key)}>Call {key}</button>
                );
            }
        )}


    </Box>
}

const mapStateToProps = (state) => {
    return {
        video: state.Classroom.video,
        mic: state.Classroom.mic
    }
}

export default connect(mapStateToProps)(Video)

















