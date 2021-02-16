import {Box} from "@material-ui/core";
import {useEffect, useRef, useState} from "react";
import style from './VideoStyle'
import Peer from "simple-peer";
import {connect} from 'react-redux'
const Video =  ({video,mic,socket}) =>{
    const classes = style()

    const [yourID, setYourID] = useState("");
    const [users, setUsers] = useState({});
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const userVideo = useRef();
    const partnerVideo = useRef();


    useEffect(() => {

        navigator.mediaDevices.getUserMedia({
            audio: mic,
            video: {video, height: '100%', width: '100%'}
        })
            .then(stream => {
                setStream(stream)
                if(userVideo.current){
                    userVideo.current.srcObject = stream

                }
            })

        // socket.on('yourID', (id) => {
        //     setYourID(id)
        // })
        //
        // socket.on('allUsers', (users) => {
        //     setUsers(users)
        // })
        // socket.on("hey", (data) => {
        //     setReceivingCall(true);
        //     setCaller(data.from);
        //     setCallerSignal(data.signal);
        // })

    }, [mic,video])

    //  function callPeer(id) {
    //
    //     const peer = new Peer({
    //         initiator: true,
    //         trickle: false,
    //         config: {
    //
    //             iceServers: [
    //                 {
    //                     urls: "stun:numb.viagenie.ca",
    //                     username: "sultan1640@gmail.com",
    //                     credential: "98376683"
    //                 },
    //                 {
    //                     urls: "turn:numb.viagenie.ca",
    //                     username: "sultan1640@gmail.com",
    //                     credential: "98376683"
    //                 }
    //             ]
    //         },
    //         stream: stream,
    //     });
    //
    //     peer.on("signal", data => {
    //         socket.emit("callUser", { userToCall: id, signalData: data, from: yourID })
    //     })
    //
    //     peer.on("stream", stream => {
    //         if (partnerVideo.current) {
    //             partnerVideo.current.srcObject = stream;
    //         }
    //     });
    //
    //     socket.on("callAccepted", signal => {
    //         setCallAccepted(true);
    //         peer.signal(signal);
    //
    //     })
    //
    // }

    // function acceptCall() {
    //     setCallAccepted(true);
    //
    //     setReceivingCall(false)
    //     const peer = new Peer({
    //         initiator: false,
    //         trickle: false,
    //         stream: stream,
    //     });
    //     peer.on("signal", data => {
    //         socket.emit("acceptCall", { signal: data, to: caller })
    //     })
    //
    //     peer.on("stream", stream => {
    //         partnerVideo.current.srcObject = stream;
    //     });
    //
    //     peer.signal(callerSignal);
    // }




    let UserVideo;

    if (stream) {
        UserVideo = (<video playsInline  muted ref={userVideo} autoPlay controls/>)
    }

    let PartnerVideo;
    if (callAccepted) {
        PartnerVideo = (
            <video playsInline ref={partnerVideo} autoPlay />
        );
    }
    let incomingCall

    if (receivingCall) {
         incomingCall = (
            <div>
                <h1>{caller} is calling you</h1>
                {/*<button onClick={acceptCall}>Accept</button>*/}
            </div>
        )

    }

    return <Box className={classes.leftUp}>
        {UserVideo}

        {PartnerVideo}
        {Object.keys(users).map(key => {
            if (key === yourID) {

                return null;
            }
            return (
                <p>ahksjd</p>
                // <button key={key} onClick={() => callPeer(key)}>Call {key}</button>
            );
        }
        )}

        {incomingCall}

    </Box>
}

const mapStateToProps = (state) => {
    return{
        video: state.Classroom.video,
        mic: state.Classroom.mic
    }
}

export default connect(mapStateToProps)(Video)

















