/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Hidden} from "@material-ui/core"
import {useEffect, useRef, useState} from "react"

import style from './classroomStyle'
import moment from 'moment'
import {connect} from 'react-redux'
import ClassRoomData from "./classroomData/ClassRoomData";
import Toolbar from "./toolbar/Toolbar";
import styled from "styled-components";
import Peer from 'simple-peer'
import {graphQlRequestAsync} from "../../../../store/middleware/utils/HttpRequest";
import {
    getRoomShiftClass
} from "../../../../store/middleware/utils/GraphQlQuery/ProfileQuery/RoomShiftClassProfile";
import {Admin, Student, Teacher} from "../../../../store/utils/Specify";

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

let valid = false

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


    const path = props.match.params.path
    useEffect(() => {
        const m = moment()

        const init = async () => {

            const classes = await graphQlRequestAsync(getRoomShiftClass(path))
                .then(e => {

                    if (role === Admin) {
                        valid = true
                    }


                    const classes = e.data.data.roomShiftClass
                    const {students, teacher} = classes

                    if (role === Teacher) {
                        console.log(teacher)

                        console.log(props.user.email)
                        if (teacher.user.email === props.user.email) valid = true

                    }

                    if (role === Student) {
                        const exist = students.find(e => e.user.email === props.user.email)
                        if (exist) valid = true
                    }

                    return classes
                })


            if (valid === false) props.history.goBack()

            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            }).then(stream => {
                // userVideo.current.srcObject = stream

                socket.emit('joinClass', {path, name, role,classes}, () => {

                })

                socket.on('classData', ({users, messages, usersFilter}) => {
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

                setChange(true)

                socket.on('user-disconnected', userId => {
                    if (peers[socket.id]) peers[userId].close()
                })

            })


            return () => {
                socket.disconnect()
            }
        }


        init().then(ignored => {})


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

    console.log(valid)


    return valid === false ? null :
        <div className={classes.root}>
            <main className={classes.content}>
                <Container>

                </Container>
                <StyledVideo ref={userVideo} autoPlay playsInline/>
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
}

const mapStateToProps = (state) => {
    return {
        messageBox: state.Classroom.showMessage,
        io: state.Socket
    }
}


export default connect(mapStateToProps)(Classroom)