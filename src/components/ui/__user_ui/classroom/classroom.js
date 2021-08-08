/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Hidden} from "@material-ui/core"
import {useEffect, useRef, useState, Fragment, lazy} from "react"
import io from 'socket.io-client'
import {ExpressEndPoint} from '../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint'

import style from './classroomStyle'
import moment from 'moment'
import {connect} from 'react-redux'
import ClassRoomData from "./classroomData/ClassRoomData";
import Toolbar from "./toolbar/Toolbar";
import styled from "styled-components";
import Peer from 'simple-peer'

const StyledVideo = styled.video`
  width: 70%;
  height: auto;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 100vh;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
`;

const VideoElement = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledVideo playsInline autoPlay ref={ref}/>
    );
}

const Classroom = (props) => {
    const classes = style();
    const [receive, setReceive] = useState('')

    const [roomName, setRoom] = useState('')
    const [roomClassName, setClasses] = useState('')
    const [subjectName, setSubject] = useState('')
    const [people, setPeople] = useState([])
    const [messages, setMessages] = useState([])
    const [role] = useState(props.user.userRole)
    const [chatDrawer, setDrawer] = useState(true)
    const [change, setChange] = useState(false)
    const [name] = useState(`${props.user.firstName} ${props.user.lastName}`)

    const [peers, setPeers] = useState([])
    const peersRef = useRef([])
    const socket = props.io.socket
    const userVideo = useRef();

    useEffect(() => {
        const m = moment()


        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            userVideo.current.srcObject = stream

            socket.emit('joinClass', {path, name, role}, () => {

            })

            socket.on('classData', ({users, messages,usersFilter}) => {
                setPeople(users)
                setMessages(messages)
                console.log(usersFilter)

                // getting all user
                usersFilter.forEach(user => {
                    const peer = createPeer(user.id, socket.id, stream)
                    console.log(user)
                    peersRef.current.push({
                        peerID: user.id,
                        peer
                    })
                    peers.push(peer)
                })
                setPeers(peers)
            })

            socket.emit('sendMessage', name + ' Has Joined The Class ', m.format('h:mm a'), true)


            // added when user join
            socket.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerId, stream)
                peersRef.current.push({
                    peerID: payload.callerId,
                    peer
                })

                setPeers(users => [...users, peer]);


            })

            socket.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id)
                item.peer.signal(payload.signal)
            })

        })

        const path = props.match.params.path


        setChange(true)

        socket.on('user-disconnected', userId => {
            alert(userId)
            if (peers[socket.id]) peers[userId].close()
        })


        return () => {
            socket.disconnect()
        }

    }, [])



    const drawerClose = () => {
        setDrawer(false)
    }

    const createPeer = (userToSignal, callerId, stream) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream
        })

        peer.on("signal", signal => {
            socket.emit("sending signal", {
                userToSignal,
                callerId, signal
            })
        })

        return peer
    }

    const addPeer = (incomingSignal, callerId, stream) => {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream
        })

        peer.on("signal", signal => {
            socket.emit("returning signal", {signal, callerId})
        })

        peer.signal(incomingSignal)

        return peer
    }


    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Container>

                </Container>
                <StyledVideo ref={userVideo} autoPlay playsInline/>
                <p>i am here bith</p>
                <Toolbar setDrawer={setDrawer}/>

            </main>


            <Hidden mdUp>
                <ClassRoomData
                    peers={peers}
                    classes={classes}
                    messages={messages}
                    setMessage={setMessages}
                    name={name}
                    onClose={drawerClose}
                    chatDrawer={chatDrawer}
                    small={true}
                />
            </Hidden>

            <Hidden mdDown>
                <ClassRoomData
                    peers={peers}
                    classes={classes}
                    setMessage={setMessages}
                    messages={messages}
                    name={name}
                    onClose={drawerClose}
                    chatDrawer={chatDrawer}
                    small={false}
                />
            </Hidden>

        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        messageBox: state.Classroom.showMessage,
        io: state.Socket
    }
}


export default connect(mapStateToProps)(Classroom)