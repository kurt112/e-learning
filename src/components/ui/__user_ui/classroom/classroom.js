/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/07/2021, Sunday
 **/
import {Divider, Drawer, Grid, Hidden, ListItem, ListItemIcon, ListItemText, withStyles} from "@material-ui/core"
import {useEffect, useRef, useState, Fragment, lazy} from "react"
import io from 'socket.io-client'
import {ExpressEndPoint} from '../../../../store/middleware/utils/ApiEndpoint/ClassroomEndPoint'

import style from './classroomStyle'
import moment from 'moment'
import {connect} from 'react-redux'
import ClassRoomData from "./classroomData/ClassRoomData";
import Toolbar from "./toolbar/Toolbar";
import List from "@material-ui/core/List";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const Video = lazy(() => import(`./video/Video`))



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
    const socket = useRef()

    useEffect(() => {
        if (socket.current === undefined) {
            const m = moment()

            socket.current = io(ExpressEndPoint)

            const path = props.match.params.path
            socket.current.emit('joinClass', {path, name, role}, () => {

            })

            socket.current.on('classData', ({users, messages}) => {
                setPeople(users)
                setMessages(messages)
            })

            socket.current.emit('sendMessage', name + ' Has Joined The Class ', m.format('h:mm a'), true)

            setChange(true)

            return () => {
                socket.current.disconnect()
            }

        }

    }, []) 

    useEffect(() => {

    }, [change])

    useEffect(() => {

        socket.current.on('messages', (message) => {
            // console.log(message)
            setMessages([...messages, message])
        })

        return () => {
            socket.current.off("messages");
        };
    }, [messages])

    const sendMessage = (event,setter,message) => {
        event.preventDefault()
        const m = moment()
        if (message) {
            socket.current.emit('sendMessage', message, m.format('h:mm a'), false, () => setter(''))
        }

    }

    const drawerClose = () => {
        setDrawer(false)
    }

    return (
        socket.current === undefined ? null :
            <div className={classes.root}>
                <main className={classes.content}>
                    <Video message={receive} socket={socket.current}/>
                    <Toolbar setDrawer={setDrawer}/>

                </main>


                <Hidden mdUp>
                    <ClassRoomData classes={classes}
                                   messages={messages}
                                   name={name}
                                   sendMessage={sendMessage}
                                   onClose={drawerClose}
                                   chatDrawer={chatDrawer}
                                   small={true}
                    />
                </Hidden>

                <Hidden mdDown>
                    <ClassRoomData classes={classes}
                                   messages={messages}
                                   name={name}
                                   sendMessage={sendMessage}
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
        messageBox: state.Classroom.showMessage
    }
}


export default connect(mapStateToProps)(Classroom)